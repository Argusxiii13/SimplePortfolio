export const projectsData = [
    {
        id: 1,
        title: "NRCPNet Intranet",
        shortDescription: "Enterprise intranet system for employee management",
        description: "NRCPNet is an organizational management and knowledge-sharing platform designed for institutional use. It manages employee and organizational data with division and section hierarchies, and provides a centralized Content Management System for announcements, featured content, and event scheduling. The platform includes a document sharing module for organizational resources and implements role-based access controls for appropriate information visibility. An integrated feedback system enables employees to submit suggestions and engage with the organization, fostering collaborative communication.",
        technologies: ["Laravel", "React", "MySQL", "PHP", "Tailwind CSS"],
        category: "Web Development",
        status: "Development Phase",
        date: "2023",
        link: "https://github.com/Argusxiii13/NRCPNet",
        deployed: false, // New field to indicate if project is live
        screenshots: [
            "/projects/nrcpnet/ss1.webp",
            "/projects/nrcpnet/ss2.webp",
            "/projects/nrcpnet/ss3.webp",
            "/projects/nrcpnet/ss4.webp",
            "/projects/nrcpnet/ss5.webp",
            "/projects/nrcpnet/ss6.webp",
            "/projects/nrcpnet/ss7.webp",
            "/projects/nrcpnet/ss8.webp",
            "/projects/nrcpnet/ss9.webp",
            "/projects/nrcpnet/ss10.webp",
            "/projects/nrcpnet/ss11.webp",
            "/projects/nrcpnet/ss12.webp",
            "/projects/nrcpnet/ss13.webp",
            "/projects/nrcpnet/ss14.webp",
            "/projects/nrcpnet/ss15.webp",
            "/projects/nrcpnet/ss16.webp",
            "/projects/nrcpnet/ss17.webp",
            "/projects/nrcpnet/ss18.webp",
            "/projects/nrcpnet/ss19.webp",
            "/projects/nrcpnet/ss20.webp",
            "/projects/nrcpnet/ss21.webp",
            "/projects/nrcpnet/ss22.webp",
            "/projects/nrcpnet/ss23.webp",
            "/projects/nrcpnet/ss24.webp",
            "/projects/nrcpnet/ss25.webp",
            "/projects/nrcpnet/ss26.webp",
            "/projects/nrcpnet/ss27.webp",
            "/projects/nrcpnet/ss28.webp"
        ],
        features: [
            "Employee/Organizational Data Management",
            "Content Management System (CMS)",
            "Document Sharing & Publishing",
            "Role-Based Access Controls",
            "Feedback/Engagement System"
        ],
        highlights: "Internship project: Enterprise intranet with employee and content management capabilities"
    }
    
];

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};