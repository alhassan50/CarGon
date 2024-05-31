export const SERVICES: ServiceList = [
    {
        title: "Air Freight",
        desc: "We make it easy to find storage solutions with air freight.",
        image: "/air.svg",
        weight: '22000lbs',
        features: [
            "Speed and time efficiency",
            "Varied service levels",
            "Cost-effective for certain goods",
            "Cargo security and safety"
        ],
        pricing: {
            amount: 448,
            unit: "/100 miles"
        },
        servicePricingImage: "/plane-fr.jpg"
    },
    {
        title: "Road Freight",
        desc: "Road transport has a crucial role in transporting goods and people.",
        image: "/road.svg",
        weight: '40000lbs',
        features: [
            "Cost flexibility based on distance",
            "Adaptable to cargo characteristics",
            "Options for timely deliveries",
            "Transparent toll charges",
            "Flexible insurance coverage"
        ],
        pricing: {
            amount: 128,
            unit: "/100 miles"
        },
        servicePricingImage: "/truck-fr.jpg"
    },
    {
        title: "Ocean Freight",
        desc: "Global trade efficiently transports diverse cargo across international waters.",
        image: "/ocean.svg",
        weight: '80000lbs',
        features: [
            "Cost-effective for long distances",
            "Variety of cargo types",
            "Flexibility in service options",
            "Reduced packaging costs"
        ],
        pricing: {
            amount: 250,
            unit: "/100 miles"
        },
        servicePricingImage: "/ship-fr.jpg"
    },
    {
        title: "Rail Freight",
        desc: "Transporting goods by train across expansive railway networks efficiently.",
        image: "/rail.svg",
        weight: '22000lbs',
        features: [
            "Cost-effective for bulk shipments",
            "Economies of scale",
            "Capacity for heavy and bulky goods",
            "Long-term cost savings",
            "Reliable schedules"
        ],
        pricing: {
            amount: 350,
            unit: "/100 miles"
        },
        servicePricingImage: "/train-fr.jpg"
    }
];
