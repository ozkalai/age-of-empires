export interface IUnitCommon {
  id: number;
  name: string;
  age: string;
  description: string;
  cost: ICost | null;
  hit_points: number;
  attack?: number;
  accuracy?: string;
  reload_time?: number;
  build_time?: number;
}

export interface IUnit extends IUnitCommon {
  expansion: string;
  attack_delay?: number;
  movement_rate?: number;
  line_of_sight: number;
  range?: string;
  armor: string;
  armor_bonus: string[];
  attack_bonus?: string[];
  blast_radius?: number;
  search_radius?: number;
}

export interface ICost {
  Wood?: number;
  Gold?: number;
  Food?: number;
}
