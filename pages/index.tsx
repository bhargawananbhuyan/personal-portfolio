import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

const Index: NextPage = () => {
	return (
		<Layout title='Bhargawanan Bhuyan'>
			<section className='my-8'>
				<h1>Hi there 👋</h1>
				<p className='mt-5 leading-relaxed'>
					I&apos;m Bhargawanan Bhuyan. I&apos;m freelance full-stack developer and
					blogger. I specialize in turning ideas into interactive digital experiences in
					web and mobile platforms.
				</p>
				<div className='mt-8 text-2xl flex gap-x-5'>
					<a href='https://github.com/bhargawananbhuyan' target='_blank'>
						<FontAwesomeIcon icon={faGithub} title='github' />
					</a>
					<a
						href='https://www.linkedin.com/in/bhargawanan-bhuyan-b60929194'
						target='_blank'
					>
						<FontAwesomeIcon icon={faLinkedinIn} title='linkedin' />
					</a>
					<a href='mailto:bhargawanan@gmail.com'>
						<FontAwesomeIcon icon={faEnvelope} title='mail' />
					</a>
				</div>
				<div className='flex gap-x-8 items-center mt-8'>
					<button
						className='bg-blue-500 px-8 py-3.5 text-white rounded sh_btn'
						onClick={() => {
							if (typeof window !== 'undefined') {
								window.document.querySelector('#contact')?.scrollIntoView()
							}
						}}
					>
						Hire me
					</button>
					<Link href='/'>
						<a className='underline underline-offset-2 text-blue-500'>Resume</a>
					</Link>
				</div>
			</section>
			<section className='mt-20'>
				<div className='mb-8'>
					<h1 className='text-2xl font-extrabold mb-2.5'>Recent Projects</h1>
					<Link href='/'>
						<a className='underline underline-offset-2'>View all</a>
					</Link>
				</div>
				<div className='grid md:grid-cols-2 gap-8'>
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
										>
											<FontAwesomeIcon icon={faGithub} title='code' />
										</a>
										<a
											href='https://github.com/bhargawananbhuyan'
											target='_blank'
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
			</section>

			<div className='my-16'>
				<div className='mb-8 '>
					<h1 className='text-2xl font-extrabold mb-2.5'>Recent articles</h1>
					<Link href='/'>
						<a className='underline underline-offset-2'>View all</a>
					</Link>
				</div>
				<div className='grid gap-y-8'>
					{[
						'Why I started this blog?',
						'Getting started with React.js for web development.',
						'Deploying a full-stack application.',
					].map((item, i) => (
						<section key={i} className='grid gap-y-2.5 md:flex gap-x-8'>
							<section className='md:text-right whitespace-nowrap flex items-center md:block gap-x-2.5'>
								<time>Sep 22, 2022</time>
								<span className='md:hidden h-1 w-1 rounded-full bg-gray-800 inline-block'></span>
								<div>3 min read</div>
							</section>
							<section className='grid gap-y-2.5 place-items-start'>
								<h1 className='font-bold text-lg'>{item}</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
									dignissimos, perferendis placeat architecto rerum officiis
									quisquam.
								</p>
								<Link href='/'>
									<a className='mt-1.5'>Read more</a>
								</Link>
							</section>
						</section>
					))}
				</div>
			</div>

			<div className='py-3.5' id='contact'>
				<section>
					<h1 className='text-2xl font-extrabold mb-2.5'>Contact me</h1>
					<p>Ping me if you want to collaborate or hire me for your next project.</p>
				</section>

				<div className='mt-10'>
					<ContactForm />
				</div>
			</div>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	return {
		props: {},
	}
}

export default Index
