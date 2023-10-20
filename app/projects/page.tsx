import Image from 'next/image'
import imageUrl from '../favicon.ico'



export default function Projects() {
    const data = [
        {id:0, title:'project1', desc: 'description 1', img:imageUrl, link:'http://localhost:3000/projects'},
        {id:1, title:'project2', desc: 'description 2', img:imageUrl, link:'http://localhost:3000/projects'},
        {id:2, title:'project3', desc: 'description 3', img:imageUrl, link:'http://localhost:3000/projects'},
    ]

    return(
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
            <div className="space-y-2 pt-6 pb-8 md:space-y-5">
                <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    All Projects
                </h1>
                
                <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10 pt-8">
                    {data.map(project =>(
                        <article key={project.id} className="overflow-hidden dark:border-zinc-600 rounded-lg border border-gray-100 bg-white shadow-lg dark:bg-black dark:shadow-gray-700 shadow-teal-100">
                            <div className='h-56 w-full relative'>
                                <Image 
                                    fill 
                                    src={project.img} 
                                    alt='image of project' 
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <div className='p-4 sm:p-6'>
                                <a href={project.link} target='_blank'>
                                    <h3 className='text-lg font-medium text-gray-900 dark:text-white'>
                                        {project.title}
                                    </h3>
                                </a>

                                <p className='line-clamp-3 mt-2 text-sm leading-relaxed text-gray-500 dark:text-gray-400'>
                                    {project.desc}
                                </p>

                                <a 
                                    href={project.link}
                                    target='_blank' 
                                    className='group mt-4 inline-flex items-center gap-1 text-sm font-medium text-teal-500'
                                >
                                    Learn More!

                                </a>

                            </div>
                        </article>
                    ))}
                </div>

            </div>

        </div>
    )
}