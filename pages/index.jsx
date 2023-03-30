import Head from 'next/head';
import Banner from '../page-components/banner';

export default function Home() {

  	return (
		<>
			<Head>
				<title>Veer Shrivastav</title>
				<meta name="description" content="Veer Shrivastav is an Entrepreneur, Technologist and Explorer." />
				<link rel="icon" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<main>
					<div className='container-flex'>
						<div className='row'>
							<div className='col-sm-12 col-md-4'>
								asdas
							</div>
							<div className='col-sm-12 col-md-8'>
								<Banner />
							</div>
						</div>
					</div>
			</main>
			<footer></footer>
		</>
  	)
}
