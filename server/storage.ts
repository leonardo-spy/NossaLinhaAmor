import {
  type User,
  type InsertUser,
  type Milestone,
  type InsertMilestone,
  type GalleryPhoto,
  type InsertGalleryPhoto,
  type CoupleInfo,
  type InsertCoupleInfo
} from "../shared/schema.js";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getMilestones(): Promise<Milestone[]>;
  getMilestone(id: string): Promise<Milestone | undefined>;
  createMilestone(milestone: InsertMilestone): Promise<Milestone>;

  getGalleryPhotos(): Promise<GalleryPhoto[]>;
  createGalleryPhoto(photo: InsertGalleryPhoto): Promise<GalleryPhoto>;

  getCoupleInfo(): Promise<CoupleInfo | undefined>;
  updateCoupleInfo(info: InsertCoupleInfo): Promise<CoupleInfo>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private milestones: Map<string, Milestone>;
  private galleryPhotos: Map<string, GalleryPhoto>;
  private coupleInfo: CoupleInfo | undefined;

  constructor() {
    this.users = new Map();
    this.milestones = new Map();
    this.galleryPhotos = new Map();

    this.initializeDefaultData();
  }

  private initializeDefaultData() {
    const defaultCoupleInfo: CoupleInfo = {
      id: randomUUID(),
      partnerOneName: "Leonardo",
      partnerTwoName: "Evelyn",
      relationshipStartDate: "2024-09-07",
      engagementDate: "2024-11-15",
      heroTitle: "Nossa Jornada de Amor",
      heroSubtitle: "Do primeiro olhar ao pedido de noivado - uma história escrita a dois",
      proposalStory: "Naquele momento mágico em frente ao Pão de Açúcar, com o coração acelerado e as mãos tremendo, fiz a pergunta mais importante da minha vida. O mundo parou, o tempo congelou, e quando ela disse 'sim', soube que todos os nossos sonhos estavam prestes a se tornar realidade.",
    };
    this.coupleInfo = defaultCoupleInfo;

    const defaultMilestones: Milestone[] = [
      {
        id: randomUUID(),
        title: "Quando tudo começou",
        description: "Naquele dia especial na Liberdade, em São Paulo, ao lado da sua irmã que era amiga dela. Um olhar, um sorriso, e algo mágico aconteceu entre nós.",
        date: "O Primeiro Encontro",
        imageUrl: "/onde_tudo_comecou.jpeg",
        order: 1,
      },
      {
        id: randomUUID(),
        title: "A noite que mudou tudo",
        description: "Um jantar em um sushi especial, conversas que pareciam não ter fim, e a certeza de que aquilo era apenas o começo de algo muito especial.",
        date: "Nosso Primeiro Jantar",
        imageUrl: "/um_jantar.jpeg",
        order: 2,
      },
      {
        id: randomUUID(),
        title: "Momentos inesquecíveis",
        description: "Um show ao lado de amigos e familiares. Cada momento junto se transformava em uma lembrança preciosa e inesquecível.",
        date: "Noite de Show",
        imageUrl: "/noite_de_show.jpg",
        order: 3,
      },
      {
        id: randomUUID(),
        title: "Quando eu pedi você em namoro",
        description: "Em Florianópolis, naquele momento único onde tudo fazia sentido. Um pedido de namoro que selou nosso compromisso e nosso amor.",
        date: "Pedido de Namoro",
        imageUrl: "/pedido_namoro.mov",
        order: 4,
      },
      {
        id: randomUUID(),
        title: "Dançando em nosso apartamento",
        description: "Construindo nosso lar, criando memórias ao lado do Chico. Cada dia dançando pela vida com você é uma festa.",
        date: "Nosso Apartamento",
        imageUrl: "/dançando_em_casa.mp4",
        order: 5,
      },
      {
        id: randomUUID(),
        title: "Explorando o mundo juntos",
        description: "No pico máximo de Campos do Jordão, ao topo da montanha. Cada pôr do sol assistido lado a lado fortalecia ainda mais nosso amor.",
        date: "Viagens Inesquecíveis",
        imageUrl: "/viagem_nesquecivel.jpeg",
        order: 6,
      },
      {
        id: randomUUID(),
        title: "O pedido de noivado",
        description: "Em frente ao Pão de Açúcar, na cidade maravilhosa, fiz a pergunta mais importante da minha vida. E ela disse SIM! O momento mais esperado chegou e marcou para sempre nossos corações.",
        date: "O Grande Dia",
        imageUrl: "/image_21.jpg",
        order: 7,
      },
    ];

    defaultMilestones.forEach((m) => {
      this.milestones.set(m.id, m);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getMilestones(): Promise<Milestone[]> {
    return Array.from(this.milestones.values()).sort((a, b) => a.order - b.order);
  }

  async getMilestone(id: string): Promise<Milestone | undefined> {
    return this.milestones.get(id);
  }

  async createMilestone(milestone: InsertMilestone): Promise<Milestone> {
    const id = randomUUID();
    const newMilestone: Milestone = {
      id,
      title: milestone.title,
      description: milestone.description,
      date: milestone.date,
      imageUrl: milestone.imageUrl ?? null,
      order: milestone.order ?? 0,
    };
    this.milestones.set(id, newMilestone);
    return newMilestone;
  }

  async getGalleryPhotos(): Promise<GalleryPhoto[]> {
    return Array.from(this.galleryPhotos.values()).sort((a, b) => a.order - b.order);
  }

  async createGalleryPhoto(photo: InsertGalleryPhoto): Promise<GalleryPhoto> {
    const id = randomUUID();
    const newPhoto: GalleryPhoto = {
      id,
      imageUrl: photo.imageUrl,
      caption: photo.caption ?? null,
      order: photo.order ?? 0,
    };
    this.galleryPhotos.set(id, newPhoto);
    return newPhoto;
  }

  async getCoupleInfo(): Promise<CoupleInfo | undefined> {
    return this.coupleInfo;
  }

  async updateCoupleInfo(info: InsertCoupleInfo): Promise<CoupleInfo> {
    const id = this.coupleInfo?.id || randomUUID();
    const updated: CoupleInfo = {
      id,
      partnerOneName: info.partnerOneName,
      partnerTwoName: info.partnerTwoName,
      relationshipStartDate: info.relationshipStartDate,
      engagementDate: info.engagementDate ?? null,
      heroTitle: info.heroTitle ?? "Nossa Jornada de Amor",
      heroSubtitle: info.heroSubtitle ?? null,
      proposalStory: info.proposalStory ?? null,
    };
    this.coupleInfo = updated;
    return this.coupleInfo;
  }
}

export const storage = new MemStorage();
