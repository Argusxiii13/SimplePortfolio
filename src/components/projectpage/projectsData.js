export const projectsData = [
    {
        id: 1,
        title: "NRCPNet Intranet",
        shortDescription: "Enterprise intranet system for employee management",
        description: "NRCPNet is an organizational management and knowledge-sharing platform designed for institutional use. It manages employee and organizational data with division and section hierarchies, and provides a centralized Content Management System for announcements, featured content, and event scheduling. The platform includes a document sharing module for organizational resources and implements role-based access controls for appropriate information visibility. An integrated feedback system enables employees to submit suggestions and engage with the organization, fostering collaborative communication.",
        technologies: ["Laravel", "React", "MySQL", "PHP", "Tailwind CSS"],
        category: "Web Development",
        status: "Development Phase",
        date: "2025",
        link: "https://github.com/Argusxiii13/NRCPNet",
        deployed: false,
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
    },
    {
        id: 2,
        title: "AutoConnect Transport",
        shortDescription: "Car rental platform with streamlined booking and personalized experience",
        description: "AutoConnect Transport is a modern car rental platform designed to transform the customer experience through intuitive booking and data-driven personalization. The platform eliminates complex manual processes with a seamless online interface, while intelligent analytics optimize pricing and vehicle availability based on customer preferences and seasonal demand patterns. Built with reliability, usability, and cross-device accessibility in mind, the platform delivers a superior rental experience that sets new standards in customer satisfaction and operational efficiency.",
        technologies: ["React", "Node.js", "Express", "PostgreSQL", "Tailwind CSS"],
        category: "Web Development",
        status: "Development Phase",
        date: "2024",
        link: "https://github.com/Argusxiii13/Front-End-Client",
        liveLink: "https://autoconnect-client-view.vercel.app",
        deployed: true,
        screenshots: [
            "/projects/autoconnectclient/ss1.webp",
            "/projects/autoconnectclient/ss2.webp",
            "/projects/autoconnectclient/ss3.webp",
            "/projects/autoconnectclient/ss4.webp",
            "/projects/autoconnectclient/ss5.webp",
            "/projects/autoconnectclient/ss6.webp",
            "/projects/autoconnectclient/ss7.webp",
            "/projects/autoconnectclient/ss8.webp",
            "/projects/autoconnectclient/ss9.webp",
            "/projects/autoconnectclient/ss10.webp"
        ],
        features: [
            "Intuitive online booking interface",
            "Real-time vehicle availability",
            "Personalized recommendations",
            "Dynamic pricing based on demand patterns",
            "Seamless reservation management",
            "Cross-device accessibility",
            "Customer preference tracking"
        ],
        highlights: "Customer-focused platform delivering seamless car rental experience through intelligent booking workflows and data-driven personalization"
    },
    {
        id: 3,
        title: "AutoConnect Admin Dashboard",
        shortDescription: "Admin control panel for managing bookings, users, fleet, sales, and feedback analytics",
        description: "AutoConnect Admin Dashboard is the operational backbone of the AutoConnect ecosystem, built to give administrators complete visibility and control over platform activity. It centralizes booking operations, user management, fleet performance, sales tracking, and customer feedback into a single responsive interface. The dashboard combines real-time API-driven metrics, visual analytics, and actionable management tools to reduce manual overhead, improve decision-making, and maintain service quality at scale. With structured workflows and comprehensive insights, it supports reliable day-to-day operations for modern transport and rental businesses.",
        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "React Router",
            "Axios",
            "Recharts",
            "Framer Motion"
        ],
        category: "Web Development",
        status: "Development Phase",
        date: "2024",
        link: "https://github.com/Argusxiii13/Front-End-Admin",
        liveLink: "https://autoconnect-admin-view.vercel.app",
        deployed: false,
        screenshots: [
            "/projects/autoconnectadmin/ss1.webp",
            "/projects/autoconnectadmin/ss2.webp",
            "/projects/autoconnectadmin/ss3.webp",
            "/projects/autoconnectadmin/ss4.webp",
            "/projects/autoconnectadmin/ss5.webp",
            "/projects/autoconnectadmin/ss6.webp",
            "/projects/autoconnectadmin/ss7.webp",
            "/projects/autoconnectadmin/ss8.webp",
        ],
        features: [
            "Dashboard KPIs for bookings, users, feedback, and daily revenue",
            "Bookings management with status tracking and trend visualizations",
            "Users management with active/inactive segmentation",
            "Fleet management with most/least rented vehicle insights",
            "Sales overview with revenue, net income, and cancellation impact",
            "Feedback monitoring with highest-rated vehicle insights",
            "Overview page with consolidated business visualizers and AI insights section",
            "Settings module with profile, security logs, and notifications management"
        ],
        highlights: "Data-driven admin suite that transforms AutoConnect operations through centralized control, analytics visibility, and comprehensive management workflows"
    }
];

export const getProjectById = (id) => {
    return projectsData.find(project => project.id === parseInt(id));
};