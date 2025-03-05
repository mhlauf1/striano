// projectImageData.ts
import { Project, PROJECT_CATEGORIES } from './types';

export interface ProjectWithGallery extends Project {
    year?: string;
    description?: string;
    src?: string;
    gallery?: string[];
    hasGallery: boolean;
}

// Your current 4 projects with image data
const projectsWithGallery = [
    {
        id: 0,
        name: "Citi Bank",
        year: "2022",
        category: PROJECT_CATEGORIES.FINANCIAL,
        src: "/proj.png",
        gallery: ["Citi1.jpg", "Citi2.jpg", "Citi3.jpg", "Citi4.jpg", "Citi5.jpg", "Citi6.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 1,
        name: "Tiffany & Co.",
        year: "2022",
        category: PROJECT_CATEGORIES.CORPORATE,
        src: "/tiff-1.JPEG",
        gallery: ["tiff1.JPEG", "tiff2.JPEG", "tiff3.JPEG", "tiff4.JPEG", "tiff5.JPEG", "tiff6.JPEG"],
        featured: false,
        hasGallery: true
    },
    {
        id: 2,
        name: "Morgan Stanley",
        year: "2022",
        category: PROJECT_CATEGORIES.FINANCIAL,
        src: "/ms-1.jpg",
        gallery: ["MS1.jpg", "MS2.jpg", "MS3.jpg", "MS4.png", "MS5.jpg", "MS6.jpg"],
        featured: false,
        hasGallery: true
    },
    {
        id: 3,
        name: "Pfizer",
        year: "2022",
        category: PROJECT_CATEGORIES.EDUCATION_MEDICAL,
        src: "/pfizer-1.jpg",
        gallery: ["Pfizer1.jpg", "Pfizer2.jpg", "Pfizer3.jpg", "Pfizer4.jpg", "Pfizer5.jpg", "Pfizer6.jpg"],
        featured: false,
        hasGallery: true
    },
];

// Import the complete project list
import { projects } from './projectData';

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

// Export the filter options with Electrical Maintenance as default
export const FILTER_OPTIONS = [
    PROJECT_CATEGORIES.ELECTRICAL_MAINTENANCE,
    'Featured Projects',
    'All Projects',
    ...Object.values(PROJECT_CATEGORIES).filter(cat => cat !== PROJECT_CATEGORIES.ELECTRICAL_MAINTENANCE)
] as const;

export type FilterOption = typeof FILTER_OPTIONS[number];