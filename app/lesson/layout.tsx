type Props = {
    children : React.ReactNode
}

const LessonLayout : React.FC<Props> = ({children}) => {

    return (

        <div className="flex flex-col h-full">
            <div className="flex flex-col h-full w-full">
                {children}
            </div>

        </div>
    )

}

export default LessonLayout