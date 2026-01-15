import axios from 'axios';
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';
import { toast } from 'react-toastify';
import ProjectSubHero from './ProjectSubHero';
import { FiArrowUpRight } from "react-icons/fi";


function ProjectDetails() {
    const [project, setProject] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://wahab-me-backend.vercel.app/api/projects/${id}`);
        setProject(res.data);
      } catch (err) {
        toast.error('Failed to fetch project.');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

   if (loading) {
        return (
          <div className='h-[90vh] bg-black flex items-center justify-center'  style={{marginTop:'-110px'}}>
            <TailSpin color='#FF014F'/>
          </div>
        )
      }
  return (
    <div>
        <ProjectSubHero title={project.title} />
     <div className='p-10 bg-gray-950'>
           <img  src={project.image} className='rounded-xl'  alt="" />
           <div className='my-4'>
            <a href={project?.link} target='_black'>
              <button className='p-2 px-4 bg-[#FF014F] rounded-full cursor-pointer text-white flex gap-2 items-center'>Live preview <FiArrowUpRight /></button>
            </a>
           </div>
         <p className="text-white my-2">
                <strong>Description:</strong> {project.description}
              </p>
              <p className="text-white mb-2">
                <strong>Category:</strong> {project.category?.name || 'N/A'}
              </p>
              {/* <p className="text-gray-700 mb-2">
                <strong>Date:</strong> {new Date(project.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {project.time}
              </p> */}
     </div>
    </div>
  )
}

export default ProjectDetails