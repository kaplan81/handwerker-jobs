export interface JobsFile {
  errno: number;
  error: string;
  body: BodyData[];
}

export interface BodyData {
  id: string;
  title: string;
  zip_code: string;
  city: string;
  thumbnail: string;
  attachments: string[];
  counter: Counter;
  is_awarded: boolean;
  categories: Category[];
  state: string;
  description: string;
  end_date: string;
  created_at: string;
}

export interface Category {
  id: string;
}

export interface Counter {
  messages_total: number;
  messages_unread: number;
}
