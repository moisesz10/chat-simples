
export type ChatMessage = {
_id: string; 
text: string;
createdAt: Date;
user: { _id: string; name?: string; avatar?: string };
image?: string | null;
};