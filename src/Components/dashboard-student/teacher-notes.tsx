import Teacher_Notes_Data from "./teacher-notes-data";

const Teacher_Notes = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col w-full bg-teacherContainer rounded-3xl overflow-y-auto h-full shadow-inner">
        <div className="flex-grow py-7 px-7">
          <Teacher_Notes_Data
            title="Progress Update Semester 1 AY 23-24"
            uploadDate="15/10/2023"
            teacherName="Jennifer Johnson"
            studentName="Ann Chovey"
            noteContent="As we transition into the second half of the semester, it's evident that our collective efforts are fostering a dynamic and engaging learning environment. The dedication shown by students in both their coursework and class participation has been commendable. I've observed significant progress in critical thinking and analytical skills across the board, which speaks volumes about their commitment to academic excellence. However, there are areas where we can enhance our learning experience further. Specifically, I've noticed a need for improvement in time management and the integration of feedback into subsequent assignments. It's crucial for students to allocate adequate time for studying and project work to meet the high standards expected of them. Additionally, embracing constructive feedback as a tool for growth can lead to substantial improvements in academic performance and a deeper understanding of the material."
          />
          <Teacher_Notes_Data
            title="Update Semester 2 AY 22-23"
            uploadDate="28/2/2023"
            teacherName="Jessica Huang"
            studentName="Ann Chovey"
            noteContent="Looking ahead, I plan to introduce more collaborative projects and discussion-based activities, aiming to enrich our classroom dynamics and encourage a more hands-on approach to learning. This method will not only help in cementing the concepts we cover but also in developing soft skills such as teamwork, communication, and problem-solving. I encourage students to take advantage of office hours for one-on-one support and to discuss any challenges they're facing. Engagement outside the classroom is just as crucial for academic success as participation inside. Let's continue to work together, embracing challenges as opportunities for growth and learning. With a focus on continuous improvement and open communication, I am confident we will achieve great things in the remainder of the semester."
          />
        </div>
        <div className="flex-1 mt-[1000px]">
          <div className="font-bold text-4xl text-headingBlack">
            {/* Placeholder to allow scrolling */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher_Notes;
