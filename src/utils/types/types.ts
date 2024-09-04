import { InterfaceSoftwareItem } from "@/components/Tables/Software";

export type AgentType = {
  uid: string;
  online: boolean;
  // clientUid: Types.ObjectId;
  inventory: {
    inventoryGeneral: TypeInventoryGeneral;
    software: {
      software: InterfaceSoftwareItem[];
    };

    processes: Processes;

    peripherals: TypePeripheral;
    custom?: TypeCustom;
  };
};

type TypeInventoryGeneral = {
  motherboard: {
    manufacturer: string;
    model_extend?: string; // Optional, as per MotherboardDto
    model: string;
    bios: string;
    bios_release: string;
  };
  cpu: {
    model: string;
    architecture: string;
    cpu_freq: number | null; // Can be null, as per CpuDto
    physical_cores: number;
    logic_cores: number;
    cpu_temperature?: number; // Optional, as per CpuDto
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
    secure_boot: boolean;
    windows_key: string | null; // Can be null, as per SystemDto
    data_install_so: string;
    last_update: string;
  };
  users: {
    users_can_login: string[]; // Array of strings, as per SystemDto
    users_already_logged: {
      users: string[];
      administrators: string[];
    };
  };
  storage: {
    letter?: string | null; // Optional and can be null, as per StorageItemDto
    name: string;
    total: number;
    used: number;
    available: number;
    percentage: number;
    bitlocker: boolean | null; // Can be null, as per StorageItemDto
  }[];
  network: {
    principal_interface: {
      name: string;
      interface: string;
      ipv4: string | null; // Can be null, as per NetworkInterfaceDto
      mac: string | null; // Can be null, as per NetworkInterfaceDto
      gateway: string | null; // Can be null, as per NetworkInterfaceDto
    };
    interfaces: {
      interface: string;
      ipv4: string | null; // Can be null, as per NetworkInterfaceDto
      mac: string | null; // Can be null, as per NetworkInterfaceDto
      gateway: string | null; // Can be null, as per NetworkInterfaceDto
    }[];
    public_ip: string;
  };
  printers: string[]; // Array of strings, as per InventoryGeneralDto
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
  "inventoryGeneral" | "peripherals"
>;

export interface ProcessesFields {
  pid: number;
  name: string;
  exe: string;
}

export interface Processes {
  processes: {
    apps: ProcessesFields[];
    system: ProcessesFields[];
  };
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

export type TypeCustom = {
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
