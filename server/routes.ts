import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/couple-info", async (req, res) => {
    try {
      const info = await storage.getCoupleInfo();
      if (!info) {
        return res.status(404).json({ message: "Couple info not found" });
      }
      res.json(info);
    } catch (error) {
      res.status(500).json({ message: "Error fetching couple info" });
    }
  });

  app.get("/api/milestones", async (req, res) => {
    try {
      const milestones = await storage.getMilestones();
      res.json(milestones);
    } catch (error) {
      res.status(500).json({ message: "Error fetching milestones" });
    }
  });

  app.get("/api/milestones/:id", async (req, res) => {
    try {
      const milestone = await storage.getMilestone(req.params.id);
      if (!milestone) {
        return res.status(404).json({ message: "Milestone not found" });
      }
      res.json(milestone);
    } catch (error) {
      res.status(500).json({ message: "Error fetching milestone" });
    }
  });

  app.get("/api/gallery", async (req, res) => {
    try {
      const photos = await storage.getGalleryPhotos();
      res.json(photos);
    } catch (error) {
      res.status(500).json({ message: "Error fetching gallery photos" });
    }
  });

  app.get("/api/time-together", async (req, res) => {
    try {
      const info = await storage.getCoupleInfo();
      if (!info) {
        return res.status(404).json({ message: "Couple info not found" });
      }

      const startDate = new Date(info.relationshipStartDate);
      const now = new Date();
      const diffTime = Math.abs(now.getTime() - startDate.getTime());
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      const years = Math.floor(diffDays / 365);
      const months = Math.floor(diffDays / 30);
      const weeks = Math.floor(diffDays / 7);
      const hours = Math.floor(diffTime / (1000 * 60 * 60));

      res.json({
        days: diffDays,
        weeks,
        months,
        years,
        hours,
        startDate: info.relationshipStartDate,
        engagementDate: info.engagementDate,
      });
    } catch (error) {
      res.status(500).json({ message: "Error calculating time together" });
    }
  });

  return httpServer;
}
