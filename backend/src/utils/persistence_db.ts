export interface PersistenceDb {
    saveDb: (baseDTO: any) => void;
    deleteDb: (id: string) => void;
    findByIdDb: (id: string) => void;
    findAllDb: () => any[];
    countDb: () => number;
}