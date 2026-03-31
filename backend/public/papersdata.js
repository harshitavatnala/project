const subjectsData = {
    "First Year Engineering": {
        "Semester 1": ["Applied Mathematics I", "Applied Physics I", "Applied Chemistry I", "Basic Electrical and Electronics Engineering", "Engineering Mechanics", "Professional and Communication Ethics"],
        "Semester 2": ["Applied Mathematics II", "Semiconductor Physics", "Data Structure", "Elements of electrical systems", "Elements of Mechanical Engineering", "Elements of Telecommunication", "Engineering Materials", "Environmental Chemistry and Non-Conventional Energy Sources", "Introduction to Chemical Engineering", "Physics of Measurements and Sensors"]
    },

    "Computer Engineering": {
        "Semester 3": ["Digital Logic and Computer Architecture", "Data Structure", "Discrete Structures and Graph Theory", "Engineering Mathematics III"],
        "Semester 4": ["Analysis of Algorithm", "Database Management System", "Engineering Mathematics IV", "Operating System"]
    },

    "Information Technology": {
        "Semester 3": ["Data Structure Analysis", "Database Management System", "Principle of Communication", "Engineering Mathematics III"],
        "Semester 4": ["Automata Theory", "Computer Network and Network Design", "Engineering Mathematics IV", "Computer Organization and Architecture", "Operating System"]
    },

    "Data Engineering": {
        "Semester 3": ["Digital Logic and Computer Architecture", "Data Structure", "Discrete Structures and Graph Theory", "Engineering Mathematics III"],
        "Semester 4": ["Analysis of Algorithm", "Database Management System", "Engineering Mathematics IV", "Operating System"]
    },

    "Mechanical Engineering": {
        "Semester 3": ["Engineering Mathematics III", "Material Metallurgy", "Thermodynamics", "Production Processes", "Strength of Materials"],
        "Semester 4": ["CAD/CAM", "Engineering Mathematics IV", "Fluid Mechanics", "Industrial Electronics", "Kinematics of Machinery"]
    },

    "Civil Engineering": {
        "Semester 3": ["Architectural Planning and Design of Buildings", "Building Materials and Construction", "Engineering Mathematics III", "Structural Analysis I", "Surveying I"],
        "Semester 4": ["Building Services", "Engineering Mathematics IV", "Structural Analysis II", "Surveying II", "Transportation Engineering"]
    },

    "Electrical Engineering": {
        "Semester 3": ["Engineering Mathematics III", "Electrical Circuit Analysis", "Electrical Machines I", "Electronic Devices and Circuits", "Signals and Systems"],
        "Semester 4": ["Engineering Mathematics IV", "Electrical Machines II", "Control Systems", "Power Systems I", "Power Electronics"]
    }
};






const papers = [

    // First Year Engineering - Semester 1
    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Applied Mathematics I"],
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_first-year-engineering_semester-1_2024_december_applied-mathematics-i-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Applied Physics I"],
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_first-year-engineering_semester-1_2024_december_applied-physics-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Applied Chemistry I"],
        year: "2024",
        month: "Dec-Jan",
        file: "project/papers/be_first-year-engineering_semester-1_2024_december_applied-chemistry-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Basic Electrical and Electronics Engineering"],
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_first-year-engineering_semester-1_2024_december_basic-electrical-electronics-engineering-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Engineering Mechanics"],
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_first-year-engineering_semester-1_2024_december_engineering-mechanics-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Professional and Communication Ethics"],
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_first-year-engineering_semester-1_2024_december_professional-and-communication-ethics-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Applied Mathematics I"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-1_2025_may_applied-mathematics-i-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Applied Physics I"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-1_2025_may_applied-physics-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Applied Chemistry I"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-1_2025_may_applied-chemistry-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Basic Electrical and Electronics Engineering"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-1_2025_may_basic-electrical-electronics-engineering-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Engineering Mechanics"],
        year: "2025",
        month: "May-June",
        file: ""
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 1",
        subjects: ["Professional and Communication Ethics"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-1_2025_may_professional-and-communication-ethics-nep-2020-scheme.pdf"
    },

    // First Year Engineering - Semester 2
    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Applied Mathematics II"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_applied-mathematics-ii-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Semiconductor Physics"],
        year: "2025",
        month: "Dec-Jan",
        file: "papers/be_first-year-engineering_semester-2_2025_may_semiconductor-physics-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Data Structure"],
        year: "2025",
        month: "Dec-Jan",
        file: "papers/be_first-year-engineering_semester-2_2025_may_data-structure-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Elements of electrical systems"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_elements-of-electrical-systems-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Elements of Mechanical Engineering"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_elements-of-mechanical-engineeringnep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Elements of Telecommunication"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_elements-of-telecommunication-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Engineering Materials"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_engineering-materials-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Environmental Chemistry and Non-Conventional Energy Sources"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_environmental-chemistry-non-conventional-energy-sources-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Introduction to Chemical Engineering"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_introduction-to-chemical-engineering-nep-2020-scheme.pdf"
    },

    {
        branch: "First Year Engineering",
        semester: "Semester 2",
        subjects: ["Physics of Measurements and Sensors"],
        year: "2025",
        month: "May-June",
        file: "papers/be_first-year-engineering_semester-2_2025_may_physics-of-measurements-sensors-nep-2020-scheme.pdf"
    },

    // Computer Engineering - Semester 3
    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Digital Logic and Computer Architecture"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_digital-logic-computer-architecturerev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Data Structure"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_data-structurerev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Discrete Structures and Graph Theory"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_discrete-structures-and-graph-theoryrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Digital Logic and Computer Architecture"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_digital-logic-computer-architecturerev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Data Structure"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_data-structurerev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Discrete Structures and Graph Theory"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_discrete-structures-and-graph-theoryrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },


    // Computer Engineering - Semester 4
    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Analysis of Algorithm"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_analysis-of-algorithmrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Database Management System"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_database-management-systemrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_engineering-mathematics-ivrev-2019-‘c’-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Operating System"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_operating-systemrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Analysis of Algorithm"],
        year: "2025",
        month: "May-June",
        file: "project/papers/be_computer-engineering_semester-4_2025_may_analysis-of-algorithmrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Database Management System"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2025_may_database-management-systemrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2025_may_engineering-mathematics-ivrev-2019-c-scheme.pdf"
    },

    {
        branch: "Computer Engineering",
        semester: "Semester 4",
        subjects: ["Operating System"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2025_may_operating-systemrev-2019-c-scheme.pdf"
    },

    //Information Technology - Semester 3
     {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Datastructure Analysis"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2024_may_data-structure-analysisrev-2019c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Database Management System"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2024_may_database-management-systemrev-2019c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Principle of Communication"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2024_may_principle-of-communicationrev-2019c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2024_may_engineering-mathematics-iiirev-2019c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Database Management System"],
        year: "2025",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2025_may_database-management-systemrev-2019c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Data Structure Analysis"],
        year: "2025",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2025_may_data-structure-analysisrev-2019c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Principle of Communication"],
        year: "2025",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2025_may_principle-of-communicationrev-2019c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2025",
        month: "May-June",
        file: "papers/be_information-technology_semester-3_2025_may_engineering-mathematics-iiirev-2019c-scheme.pdf"
    },


    // Information Technology - Semester 4
    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Automata Theory"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2024_may_automata-theory-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Computer Network and Network Design"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2024_may_computer-network-and-network-design-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2024_may_engineering-mathematics-iv-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Computer Organization and Architecture"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2024_may_computer-organization-and-architecture-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Operating System"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2024_may_operating-system-rev-2019-c-scheme.pdf"
    },


    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Automata Theory"],
        year: "2025",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2025_may_automata-theory-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Computer Network and Network Design"],
        year: "2025",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2025_may_computer-network-and-network-design-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Computer Organization and Architecture"],
        year: "2025",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2025_may_computer-organization-and-architecture-rev-2019-c-scheme.pdf"
    },

     {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2025_may_engineering-mathematics-iv-rev-2019-c-scheme.pdf"
    },
   
    {
        branch: "Information Technology",
        semester: "Semester 4",
        subjects: ["Operating System"],
        year: "2024",
        month: "May-June",
        file: "papers/be_information-technology_semester-4_2025_may_operating-system-rev-2019-c-scheme.pdf"
    },

      // Data Engineering - Semester 3
    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Digital Logic and Computer Architecture"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_digital-logic-computer-architecturerev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Data Structure Analysis"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_data-structurerev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Discrete Structures and Graph Theory"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_discrete-structures-and-graph-theoryrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2024_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Digital Logic and Computer Architecture"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_digital-logic-computer-architecturerev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Data Structure"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_data-structurerev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Discrete Structures and Graph Theory"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_discrete-structures-and-graph-theoryrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-3_2025_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },


    // Data Engineering - Semester 4
    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Analysis of Algorithm"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_analysis-of-algorithmrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Database Management System"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_database-management-systemrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_engineering-mathematics-ivrev-2019-‘c’-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Operating System"],
        year: "2024",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2024_may_operating-systemrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Analysis of Algorithm"],
        year: "2025",
        month: "May-June",
        file: "project/papers/be_computer-engineering_semester-4_2025_may_analysis-of-algorithmrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Database Management System"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2025_may_database-management-systemrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2025_may_engineering-mathematics-ivrev-2019-c-scheme.pdf"
    },

    {
        branch: "Data Engineering",
        semester: "Semester 4",
        subjects: ["Operating System"],
        year: "2025",
        month: "May-June",
        file: "papers/be_computer-engineering_semester-4_2025_may_operating-systemrev-2019-c-scheme.pdf"
    },

    //Mechanical Engineering - Semester 3
    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2024_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Material Metallurgy"],    
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2024_may_material-metallurgy-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Thermodynamics"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2024_may_thermodynamics-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Production Processes"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2024_may_production-processes-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Strength of Materials"],
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2024_may_strength-of-materials-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2025_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Material Metallurgy"],    
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2025_may_material-metallurgy-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Thermodynamics"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2025_may_thermodynamics-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Production Processes"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2025_may_production-processes-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 3",
        subjects: ["Strength of Materials"],
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-3_2025_may_strength-of-materials-rev-2019-c-scheme.pdf"
    },
   
    //Mechanical Engineering - Semester 4
    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["CAD/CAM"],
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2024_may_cadcamrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],    
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2024_may_engineering-mathematics-ivrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Fluid Mechanics"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2024_may_fluid-mechanicsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Industrial Electronics"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2024_may_industrial-electronicsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Kinematics of Machinery"],
        year: "2024",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2024_may_kinematics-of-machineryrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["CAD/CAM"],
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2025_may_cadcamrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],    
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2025_may_engineering-mathematics-ivrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Fluid Mechanics"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2025_may_fluid-mechanicsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Industrial Electronics"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2025_may_industrial-electronicsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Mechanical Engineering",
        semester: "Semester 4",
        subjects: ["Kinematics of Machinery"],
        year: "2025",
        month: "May-June",
        file: "papers/be_mechanical-engineering_semester-4_2025_may_kinematics-of-machineryrev-2019-c-scheme.pdf"
    },

    //Civil Engineering - Semester 3
    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Architectural Planning and Design of Buildings"],
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2024_may_architectural-planning-design-of-buildingsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Fluid Mechanics"],    
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2024_may_fluid-mechanics-irev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Geology"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2024_may_engineering-geologyrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2024_may_engineering-mathematics-iiirev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Mechanics of Solids"],
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2024_may_mechanics-of-solidsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Architectural Planning and Design of Buildings"],
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2025_may_architectural-planning-design-of-buildingsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Enginneering Geology"],    
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2025_may_engineering-geologyrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2025_may_engineering-mathematics-iiirev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 3",
        subjects: ["Mechanics of Solids"],
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-3_2025_may_mechanics-of-solidsrev-2019-c-scheme.pdf"
    },

    
    //Civil Engineering - Semester 4
    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Building Materials and Concrete Technology"],
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2024_may_building-materials-concrete-technologyrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],    
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2024_may_engineering-mathematics-iv-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Structural Analysis"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2024_may_structural-analysisrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Surveying"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2024_may_surveyingrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Fluid Mechanics"],
        year: "2024",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2023_may_fluid-mechanics-iirev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Building Materials and Concrete Technology"],
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2025_may_building-materials-concrete-technologyrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],    
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2025_may_engineering-mathematics-iv-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Fluid Mechanics"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2025_may_fluid-mechanics-iirev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Structural Analysis"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2025_may_structural-analysisrev-2019-c-scheme.pdf"
    },

    {
        branch: "Civil Engineering",
        semester: "Semester 4",
        subjects: ["Surveying"],
        year: "2025",
        month: "May-June",
        file: "papers/be_civil-engineering_semester-4_2025_may_surveyingrev-2019-c-scheme.pdf"
    },

    //Electronics Engineering - Semester 3
    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Electrical Networks Analysis and Synthesis"],
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_electronics-engineering_semester-3_2024_december_electrical-networks-analysis-and-synthesis-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Electronic Devices and Circuits I"],    
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_electronics-engineering_semester-3_2024_december_electronic-devices-and-circuits-i-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Electronic Instruments and Measurements"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-3_2024_may_electronic-instruments-and-measurements-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Digital Logic Circuits"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-3_2024_may_digital-logic-circuits-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Electrical Networks Analysis and Synthesis"],
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-3_2024_may_electrical-networks-analysis-and-synthesis-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-3_2024_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Digital Logic Circuits"],    
        year: "2025",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-3_2025_may_digital-logic-circuits-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Electronic devices and Circuits I"],       
        year: "2025",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-3_2025_may_electronic-devices-and-circuits-i-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 3",
        subjects: ["Engineering Mathematics III"],
        year: "2025",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-3_2025_may_engineering-mathematics-iii-rev-2019-c-scheme.pdf"
    },

    
    //Civil Engineering - Semester 4
    {
        branch: "Electronics Engineering",
        semester: "Semester 4",
        subjects: ["Electronics Devices and Circuits II"],
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-4_2024_may_electronics-devices-and-circuits-iirev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 4",
        subjects: ["Engineering Mathematics IV"],    
        year: "2024",
        month: "Dec-Jan",
        file: "papers/be_electronics-engineering_semester-4_2024_december_engineering-mathematics-rev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 4",
        subjects: ["Microcontroller Applications"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-4_2024_may_microcontroller-applicationsrev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 4",
        subjects: ["Principles of Communication Engineering"],       
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-4_2024_may_principles-of-communication-enggrev-2019-c-scheme.pdf"
    },

    {
        branch: "Electronics Engineering",
        semester: "Semester 4",
        subjects: ["Signals and Systems"],
        year: "2024",
        month: "May-June",
        file: "papers/be_electronics-engineering_semester-4_2024_may_signals-and-systems-rev-2019-c-scheme.pdf"
    },

];

//Filter Function
function updateSubjects() {
    const branch = document.getElementById("branch").value;
    const semester = document.getElementById("semester").value;
    const subjectDropdown = document.getElementById("subject");

    subjectDropdown.innerHTML = "<option>Select Subject</option>";

    if (subjectsData[branch] && subjectsData[branch][semester]) {
        subjectsData[branch][semester].forEach(subject => {
            let option = document.createElement("option");
            option.value = subject;
            option.textContent = subject;
            subjectDropdown.appendChild(option);
        });
    }
}

function filterPapers() {
    const selectedSubject = document.getElementById("subject").value;
    const table = document.querySelector("table");

    //Remove old rows (except header)
    table.innerHTML = `
        <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Link</th>
        </tr>
    `;

    let found = false;

    papers.forEach(paper => {
        if(paper.subjects.includes(selectedSubject)) {
            found = true;

            let row =`
                <tr>
                    <td>${paper.year}</td>
                    <td>${paper.month}</td>
                    <td><a href="${paper.file}" target="_blank">View Paper</a></td>
                    </tr>
                    `;
            table.innerHTML += row;
        }
    });

    if (!found) {
        table.innerHTML += `
            <tr>
                <td colspan="3">No papers found for the selected subject.</td>
            </tr>
        `;
    }
}