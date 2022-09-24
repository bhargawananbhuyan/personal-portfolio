import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NextPage } from 'next'
import React from 'react'
import Layout from '../../components/Layout'
const Index: NextPage = () => {
	return (
		<Layout title='Projects | Bhargawanan Bhuyan'>
			<div className='min-h-screen mt-5'>
				<section>
					<h1 className='text-2xl font-extrabold'>Projects</h1>
				</section>

				<div className='grid md:grid-cols-2 gap-8 mt-7'>
					{Array.from(Array(6).keys()).map((i) => (
						<div key={i} className='border rounded-lg p-5'>
							<div className='h-[250px] bg-gray-200 rounded'></div>
							<section className='grid gap-y-3.5 mt-5'>
								<div className='flex items-center justify-between'>
									<div className='font-bold text-lg'>Lorem ipsum</div>
									<div className='flex gap-x-3.5 text-xl'>
										<a
											href='https://github.com/bhargawananbhuyan'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon icon={faGithub} title='code' />
										</a>
										<a
											href='https://github.com/bhargawananbhuyan'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon
												icon={faArrowUpRightFromSquare}
												title='live demo'
											/>
										</a>
									</div>
								</div>
								<div className='flex gap-x-2.5'>
									<span className='text-xs bg-gray-200 px-3.5 py-1.5 rounded'>
										React
									</span>
									<span className='text-xs bg-gray-200 px-3.5 py-1.5 rounded'>
										Express
									</span>
									<span className='text-xs bg-gray-200 px-3.5 py-1.5 rounded'>
										MongoDB
									</span>
								</div>
								<hr />
								<p className='leading-relaxed'>
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
									quos recusandae, eos saepe quas quo officia.
								</p>
							</section>
						</div>
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Index
