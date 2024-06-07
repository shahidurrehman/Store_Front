function Tab({ component, formId, title = "" }) {
	return (
		<div className='col-12 col-md-9'>
			<div className='card'>
				{title ? (
					<div className='card-header'>
						<h3 className='card-title'>{title}</h3>
					</div>
				) : (
					<></>
				)}
				{/* <div className='card-body'>{component}</div> */}
				{component}
			</div>
		</div>
	);
}

export default Tab;
