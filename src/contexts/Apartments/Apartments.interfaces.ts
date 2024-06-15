export interface ApartmentsProviderProps {
  children: React.ReactNode;
}

export interface apartment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  apartment: number;
}

export interface ApartmentsInterfaces {
  handleApartments: () => void;
  apartments: apartment[];
  control: boolean;
}
