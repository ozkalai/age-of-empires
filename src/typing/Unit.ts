export interface IUnitDetail {
  accuracy?: string;
  attack?: number;
  hit_points: number;
  reload_time?: number;
  build_time?: number;
  cost: Cost;
  age: string;
  description: string;
  id: number;
  name: string;
}

export interface IUnit extends IUnitDetail {
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

export interface Cost {
  Wood?: number;
  Gold?: number;
  Food?: number;
}
