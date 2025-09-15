// projectImageData.ts
import { Project, PROJECT_CATEGORIES } from './types';
import { projects } from './projectData';

export interface ProjectWithGallery extends Project {
    year?: string;
    description?: string;
    src?: string;
    gallery?: string[];
    hasGallery: boolean;
}

const projectsWithGallery = [
    {
        id: 0,
        name: "Citi Headquarters Bank Branch, 388 Greenwich St.",
        year: "2022",
        category: PROJECT_CATEGORIES.FINANCIAL,
        src: "/proj.png",
        gallery: ["citi-main.png", "Citi3.jpg", "Citi4.jpg", "Citi5.jpg", "Citi6.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 1,
        name: "Tiffany & Co.",
        year: "2022",
        category: PROJECT_CATEGORIES.CORPORATE,
        src: "/tiff-1.JPEG",
        gallery: ["tiffany-1.jpg", "tiffany-2.jpg", "tiff1.JPEG", "tiffany-wed.jpg", "tiff2.JPEG", "tiff3.JPEG", "tiff4.JPEG", "tiff5.JPEG", "tiff6.JPEG"],
        featured: false,
        hasGallery: true
    },
    {
        id: 2,
        name: "Morgan Stanley, 1585 Broadway, Various Projects/Multiple Floor Fit-Outs",
        year: "2022",
        category: PROJECT_CATEGORIES.FINANCIAL,
        src: "/MS-main.png",
        gallery: ["MS-main.png"],
        featured: false,
        hasGallery: true
    },
    {
        id: 3,
        name: "Barclays Capital",
        year: "2022",
        category: PROJECT_CATEGORIES.ELECTRICAL_MAINTENANCE,
        src: "bac-1.jpeg",
        gallery: ["bac-1.jpeg", "bac-2.jpeg", "bac-18.jpeg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 4,
        name: "Little Nell Hotel",
        year: "2022",
        category: PROJECT_CATEGORIES.PROFESSIONAL,
        src: "little-nell.jpg",
        gallery: ["little-nell.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 5,
        name: "Wells Fargo, 20 Hudson Yards",
        year: "2022",
        category: PROJECT_CATEGORIES.FINANCIAL,
        src: "wells-fargo.webp",
        gallery: ["wells-fargo.webp", "wells-fargo-2.png"],
        featured: false,
        hasGallery: true
    },
    {
        id: 6,
        name: "St. John’s University Little Theater",
        year: "2022",
        category: PROJECT_CATEGORIES.EDUCATION_MEDICAL,
        src: "st-johns.jpg",
        gallery: ["st-johns.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 7,
        name: "Telx, 111 8th Ave",
        year: "2022",
        category: PROJECT_CATEGORIES.DATA_CENTERS,
        src: "telx.png",
        gallery: ["telx.png"],
        featured: false,
        hasGallery: true
    },
    {
        id: 8,
        name: "Gerber Bar at the Weston Grand Central Hotel, 212 E. 42nd St.",
        year: "2022",
        category: PROJECT_CATEGORIES.PROFESSIONAL,
        src: "gerber.jpg",
        gallery: ["gerber.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 9,
        name: "Sheraton Ballroom Lighting, 811 Seventh Avenue",
        year: "2022",
        category: PROJECT_CATEGORIES.PROFESSIONAL,
        src: "sheraton.jpg",
        gallery: ["sheraton.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 10,
        name: "Morgan Stanley, 1585 Broadway, Various Projects/Multiple Floor Fit-Outs",
        year: "2022",
        category: PROJECT_CATEGORIES.PROFESSIONAL,
        src: "morgans-hotel.jpg",
        gallery: ["morgans-hotel.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 11,
        name: "Major League Baseball Headquarters, 245 Park Ave.",
        year: "2022",
        category: PROJECT_CATEGORIES.CORPORATE,
        src: "mlb.jpg",
        gallery: ["mlb.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 12,
        name: "Barnard College Milstein Center",
        year: "2022",
        category: PROJECT_CATEGORIES.EDUCATION_MEDICAL,
        src: "Barnard-1.jpg",
        gallery: ["Barnard-1.jpg", "Barnard-2.jpg", "Barnard-3.jpg", "Barnard-4.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 13,
        name: "NYSE, 11 Wall St., B1 Vault Level Speak Easy",
        year: "2022",
        category: PROJECT_CATEGORIES.FINANCIAL,
        src: "nyse-1.jpg",
        gallery: ["nyse-1.jpg", "nyse-2.jpg", "nyse-3.jpg", "nyse-4.jpg", "nyse-5.jpg", "nyse-6.jpg", "nyse-7.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 14,
        name: "Deutsche Bank Global Headquaters - Life Safety Systems",
        year: "2022",
        category: PROJECT_CATEGORIES.FINANCIAL,
        src: "Deutsche-Bank.jpg",
        gallery: ["Deutsche-Bank.jpg"],
        featured: false,
        hasGallery: true
    },

];


// Find matching projects in the full list that match your gallery projects
const galleryProjectIds = projectsWithGallery.map(p => {
    // Find similar project names in the full project list
    const matchingProject = projects.find(fullProject => {
        // Normalize names for comparison (remove punctuation, lowercase, etc.)
        const normalizedGalleryName = p.name.toLowerCase().replace(/[^\w\s]/g, '');
        const normalizedFullName = fullProject.name.toLowerCase().replace(/[^\w\s]/g, '');

        return normalizedFullName.includes(normalizedGalleryName) ||
            normalizedGalleryName.includes(normalizedFullName);
    });

    return matchingProject ? matchingProject.id : p.id;
});

// Create the combined list with all projects
export const combinedProjects: ProjectWithGallery[] = projects.map(project => {
    // Check if this project has a matching gallery project
    const galleryProject = projectsWithGallery.find(gp => {
        // First try to match by ID
        if (galleryProjectIds.includes(project.id)) {
            return galleryProjectIds.indexOf(project.id) === projectsWithGallery.indexOf(gp);
        }
        // If that fails, try to match by name
        const normalizedProjectName = project.name.toLowerCase().replace(/[^\w\s]/g, '');
        const normalizedGalleryName = gp.name.toLowerCase().replace(/[^\w\s]/g, '');

        return normalizedProjectName.includes(normalizedGalleryName) ||
            normalizedGalleryName.includes(normalizedProjectName);
    });

    if (galleryProject) {
        // Merge the data, preferring the gallery project data
        return {
            ...project,
            year: galleryProject.year,
            src: galleryProject.src,
            gallery: galleryProject.gallery,
            hasGallery: true
        };
    }

    // Return project without gallery
    return {
        ...project,
        hasGallery: false,
        gallery: [] // Add empty gallery array to avoid TypeScript errors
    };
});

// Export the filter options with all categories
export const FILTER_OPTIONS = Object.values(PROJECT_CATEGORIES);

export type FilterOption = (typeof PROJECT_CATEGORIES)[keyof typeof PROJECT_CATEGORIES];