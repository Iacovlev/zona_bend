import { Thing } from "./things";

export interface Grops {
    id: number;
    sku: string;
    defaultSku: string;
    status: string;
    children: Thing[];
}