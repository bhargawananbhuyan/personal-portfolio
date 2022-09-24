import { NextPage } from 'next'
import React from 'react'
import Layout from '../components/Layout'

const Index: NextPage = () => {
	return (
		<Layout title='About | Bhargawanan Bhuyan'>
			<article className='mt-5'>
				<section>
					<h1 className='text-2xl font-extrabold'>About me</h1>
				</section>

				<div className='grid gap-y-5 mt-5'>
					<section>
						<p className='leading-relaxed'>
							Greetings Visitor! Welcome to bhargawanan.com — a personal blogging site
							of mine. I'm a developer, graduated in Instrumentation Engineering from
							Assam Engineering College, Guwahati. This site was started with a vision
							to share my learnings with an online audience, to make (you) understand
							the skills of programming and logical thinking, and update (you) with
							the technological developments that have been taking place everyday.
						</p>
					</section>
					<section>
						<p className='leading-relaxed'>
							I was born and brought up in a small town called Amguri, situated on the
							banks of the river Jhanji, in the Sivasagar District of Assam, India.
							Both my parents are teachers. I have an elder brother who's way taller,
							stronger and sharper than me! I did my schooling from Don Bosco School,
							Amguri. I was an average looking kid (still I'm) with a brain good
							enough to survive high school with good grades. After my matriculation I
							moved to Guwahati City with hopes and aspirations of becoming an
							engineer. I got admitted to the prestigious Cotton College, Guwahati.I
							had a fair share of enjoyment in this place. But a lot of enjoyment
							reduces grades; the same happened to me. Out of fear and frustration, I
							took to studies after my final exams and that somehow landed me in Assam
							Engineering College. This place is another story to be filled in someday
							later. That's all for now. I'm 22; what more to write :|
						</p>
					</section>
					<section>
						<h2>Hobbies</h2>
						<ul className='hobbylist ml-4 mt-2.5'>
							<li>I write songs, play them in my guitar.</li>
							<li>I write blogs and articles herein.</li>
							<li>I code everyday.</li>
							<li>I travel.</li>
						</ul>
					</section>
				</div>
			</article>
		</Layout>
	)
}

export default Index
