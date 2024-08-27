import { InterfaceSoftwareItem } from "@/pages/Software/Software";

export type AgentType = {
  hwid: string;
  uid: string;
  online: boolean;
  // clientUid: Types.ObjectId;
  inventory: {
    inventoryHardware: {
      motherboard: {
        manufacturer: string;
        model_extend: string;
        model: string;
      };
      cpu: {
        model: string;
        architecture: string;
        cpu_freq: number;
        physical_cores: number;
        logic_cores: number;
      };
      memory: {
        total: number;
        available: number;
        used: number;
        percentage: number;
      };
      system: {
        so: string;
        version: string;
        architecture: string;
        domain: string;
        type_machine: string;
        hostname: string;
        user_logged: string;
        last_update: string;
      };
      storage: {
        total: number;
        used: number;
        available: number;
        percentage: number;
      };
      network: {
        mac: string;
        ip_public: string;
        ipv4: string;
        network: string;
      };
    };
    software: {
      software: InterfaceSoftwareItem[];
    };

    processes: Processes;

    peripherals: TypePeripheral;
  };
  custom?: TypeCustom;
};

type TypePeripheralFields = {
  name: string;
  description: string;
  device_id: string;
};

type TypePeripheralMonitor = {
  device_id: string;
  resolution: string;
  gpu: string;
  gpu_id: string;
};

export type TypePeripheral = {
  keyboard: TypePeripheralFields;
  mouse: TypePeripheralFields;
  monitors: TypePeripheralMonitor[];
};

export type AgentInventoryType = Pick<
  AgentType["inventory"],
  "inventoryHardware" | "peripherals"
>;

export interface ProcessesFields {
  pid: number;
  name: string;
  exe: string;
}

export interface Processes {
  apps: ProcessesFields[];
  system: ProcessesFields[];
}

export type TypePeripherical = {
  status: "Normal" | "Critico";
  host: string;
  class: string;
  local: string;
  person: string;
  manufacturer: string;
  sample: string;
  so: string;
  department: string[];
  patrimony: string;
  date_warranty: string;
  category: string[];
  nfe: string;
  purchase_price: number;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
};

type TypeCustom = {
  department: string;
  collaborator: string;
  bond: "Operador" | "Proprietario";
  patrimony: string;
  date_warranty: string;
  nfe: string;
  purchase_price: number;
  local: string;
};

type TypeDeviceStockAutomatic = {
  device_type: "keyboard" | "mouse" | "monitor";
  device_id: string;
};

// Tipo para a estrutura completa do estoque
export type TypeStockAutomatic = {
  host_ref: string;
  hostname: string;
  devices: TypeDeviceStockAutomatic[]; // Array de dispositivos
};
