export interface LeftSectionDisplay {
  step: string;
  title: string;
  isActive: boolean;
  done: boolean;
}

export type FormData = {
  data: string;
};

export type UserInputType = {
  category?: string;
  serviceName?: string;
  os?: string;
  serviceUrl?: string;
  dueDate?: number;
};
