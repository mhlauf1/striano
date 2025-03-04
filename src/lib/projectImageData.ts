
interface ProjectItem {
    id: number;
    src: string;
    name: string;
    year?: string;
    description?: string;
    sector: string;
    gallery: string[]
}

export const data: ProjectItem[] = [
    {
        id: 0,
        src: "/proj.png",
        name: "Citi Bank",
        year: "2022",
        sector: "Financial Institutions",
        gallery: ["Citi1.jpg", "Citi2.jpg", "Citi3.jpg", "Citi4.jpg", "Citi5.jpg", "Citi6.jpg",]
    },
    {
        id: 1,
        src: "/tiff-1.JPEG",
        name: "Tiffany's",
        year: "2022",
        sector: "Commerical",
        gallery: ["tiff1.JPEG", "tiff2.JPEG", "tiff3.JPEG", "tiff4.JPEG", "tiff5.JPEG", "tiff6.JPEG",]

    },
    {
        id: 2,
        src: "/ms-1.jpg",
        name: "Morgan Stanely",
        year: "2022",
        sector: "Financial Institutions",
        gallery: ["MS1.jpg", "MS2.jpg", "MS3.jpg", "MS4.png", "MS5.jpg", "MS6.jpg",]

    },
    {
        id: 3,
        src: "/pfizer-1.jpg",
        name: "Pfizer",
        year: "2022",
        sector: "Healthcare",
        gallery: ["Pfizer1.jpg", "Pfizer2.jpg", "Pfizer3.jpg", "Pfizer4.jpg", "Pfizer5.jpg", "Pfizer6.jpg",]

    },
];