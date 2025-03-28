export interface Resource {
    name: string;
    link: string;
    image: string; // hosted on S3
    description: string;
    tags: string[]; // categories this resource belongs to
    isNew?: boolean; // optional, true if it's a new resource
  }
  
  export function newResourcesFirst(resources: Resource[]): Resource[] {
    return [...resources].sort((a, b) => {
      if (a.isNew && !b.isNew) return -1;
      if (!a.isNew && b.isNew) return 1;
      return 0;
    });
  }