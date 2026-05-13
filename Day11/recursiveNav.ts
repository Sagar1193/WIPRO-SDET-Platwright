type FolderNode = {
  name: string;
  files?: string[];
  subFolders?: FolderNode[];
};