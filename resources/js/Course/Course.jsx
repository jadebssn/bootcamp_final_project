function Course(props) {
    

    return (
        <>
        <div>{props.course.title}</div>
            <p>{props.course.description}</p>
            </>
    )
}

export default Course;