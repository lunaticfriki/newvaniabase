export interface Item {
  title: string;
  category: string;
  author?: string;
  description?: string;
  id: string;
  tags?: string;
  topic?: string;
  createad_at: Date;
  publisher?: string;
  cover?: string;
  completed?: boolean;
  owner: string;
  slug: string;
}
