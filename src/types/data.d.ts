interface DataContext {
  data: DataObject;
  setData: React.Dispatch<React.SetStateAction<DataObject>>;
  getFullName: () => string;
}

type DataObject = {
  personal_information: {
    full_name: string;
    first_name: string;
    second_name: string;
    middle_name: string;
    surname: string;
    email: string;
    phone_number: string;
    location: string;
    portfolio_link: string;
  };
  educational_backgrounds: {
    heading: string;
    contents: EducationalBackground[];
  };
  work_experiences: {
    heading: string;
    contents: WorkExperience[];
  };
  skills: {
    heading: string;
    contents: Skill[];
  };
  projects: {
    heading: string;
    contents: Project[];
  };
  awards: {
    heading: string;
    contents: Award[];
  };
};

// type string = {
//   heading: string;
// };

type EducationalBackground = {
  school_name: string;
  school_location: string;
  degree: string;
  major: string;
  gpa: number;
  start_date: string;
  end_date: string;
};

type WorkExperience = {
  company_name: string;
  job_title: string;
  job_location: string;
  job_responsibilities: string[];
  start_date: string;
  end_date: string;
};

type Skill = {
  name: string;
  details: string[];
};

type Project = {
  name: string;
  description: string;
  link: string;
  tools_used: string[];
};

type Award = {
  name: string;
  date: string;
  awarder: string;
  summary: string[];
};
