interface TabContent {
    id: string;
    title: string;
    heading: string;
    description: string;
    bulletPoints: string[];
    image: string;
}

export const tabsData: TabContent[] = [
    {
        id: 'core-infrastructure',
        title: 'Core Infrastructure',
        heading: 'Core Power Solutions',
        description: 'Building the backbone of electrical infrastructure across NYC',
        bulletPoints: [
            'Complete electrical distribution systems with enterprise-grade reliability',
            'High/low voltage solutions for mission-critical operations',
            'Advanced UPS and backup power systems for 24/7 uptime'
        ],
        image: '/infrastructure.png'
    },
    {
        id: 'building-systems',
        title: 'Building Systems',
        heading: 'Intelligent Building Integration',
        description: 'Transforming properties into high-performance, responsive environments',
        bulletPoints: [
            'State-of-the-art lighting control and automation systems',
            'Building management systems with real-time monitoring',
            'IoT integration for enhanced operational efficiency'
        ],
        image: '/infrastructure.png'
    },
    {
        id: 'maintenance-support',
        title: 'Maintenance & Support',
        heading: 'Mission-Critical Power Infrastructure',
        description: "Powering the digital backbone of New York's leading institutions",
        bulletPoints: [
            'Redundant power distribution systems for 99.999% uptime',
            'Precision cooling infrastructure integration',
            'Advanced grounding and protection systems'
        ],
        image: '/infrastructure.png'
    },
    {
        id: 'project-services',
        title: 'Project Services',
        heading: 'Critical Response Infrastructure',
        description: 'Ensuring uninterrupted operations for emergency response facilities',
        bulletPoints: [
            'Rapid-response backup power deployment',
            'Emergency power transfer systems with sub-second response',
            'Life-safety system integration and compliance'
        ],
        image: '/infrastructure.png'
    },

];




