export const PROJECT_CATEGORIES = {
    FINANCIAL: 'Financial Institutions',
    EDUCATION_MEDICAL: 'Universities, Educational & Medical Facilities, Non-Profit Organizations',
    CORPORATE: 'Corporate Offices, Retail Stores, Museums, Government Buildings',
    PROFESSIONAL: 'Hotels, Real Estate Services, Insurance Management, Law Firms',
    TRADING: 'Trading Floors',
    DATA_CENTERS: 'Data Centers / Telecommunications',
    SPECIALTY: 'Specialty Projects'
} as const;

// Create a type from the values of the object
export type ProjectCategory = typeof PROJECT_CATEGORIES[keyof typeof PROJECT_CATEGORIES];

// Helper function to check if a string is a valid category
export const isValidCategory = (category: string): category is ProjectCategory => {
    return Object.values(PROJECT_CATEGORIES).includes(category as ProjectCategory);
};

// Interface for a project
export interface Project {
    id: number;
    name: string;
    category: ProjectCategory;
    featured: boolean;
}