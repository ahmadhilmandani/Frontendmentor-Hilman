import iconX from './assets/img/icon-cross.svg'
import iconCheck from './assets/img/icon-check.svg'

export function List(props) {
    // const handleDrag = () => {
    //     console.log("halo")
    // }

    if (props.category === 'all') {
        return (
            <div className='px-3 py-3 lg:px-5 lg:py-4 flex justify-between items-center text-xs md:text-base text-white border-b border-b-Cust-Very-Dark-Grayish-Blue' draggable onDrag={props.onDragReorder} onDragOver={props.onHandleDragOver} onDrop={props.onDropReorder}>
                <div className='flex gap-3 items-center'>
                    <div
                        className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-full overflow-hidden flex justify-center items-center ${props.list.done ? 'bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple' : 'border hover:translate-y-[-5px] cursor-pointer transition ease-in-out duration-100'}`}
                        onClick={() => {
                            props.setDone(props.index)
                        }}
                    >
                        {props.list.done &&
                            <img src={iconCheck} alt="icon check" />
                        }
                    </div>
                    <p className={`draggable cursor-pointer ${props.list.done == true ? 'line-through text-Cust-Dark-Grayish-Blue' : ''}`}>{props.list.work}</p>
                </div>
                <img src={iconX} alt="" className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] cursor-pointer'
                    onClick={() => {
                        props.removeList(props.index)
                    }} />
            </div>
        )
    }
    else if (props.category === 'active' && props.list.done == false) {
        return (
            <div className='px-3 py-3 lg:px-5 lg:py-4 flex justify-between items-center text-xs md:text-base text-white border-b border-b-Cust-Very-Dark-Grayish-Blue' draggable>
                <div className='flex gap-3 items-center'>
                    <div className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-full overflow-hidden flex justify-center items-center ${props.list.done ? 'bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple' : 'border hover:translate-y-[-5px] cursor-pointer transition ease-in-out duration-100'}`}
                        onClick={() => {
                            props.showDone(props.index)
                        }
                        }
                    >
                        {props.list.done &&
                            <img src={iconCheck} alt="icon check" />
                        }
                    </div>
                    <p className={`draggable cursor-pointer ${props.list.done == true ? 'line-through text-Cust-Dark-Grayish-Blue' : ''}`} >{props.list.work}</p>
                </div>
                <img src={iconX} alt="" className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] cursor-pointer'
                    onClick={() => {
                        props.removeList(props.index)
                    }} />
            </div>
        )
    }

    else if (props.category === 'complete' && props.list.done == true) {
        return (
            <div className='px-3 py-3 lg:px-5 lg:py-4 flex justify-between items-center text-xs md:text-base text-white border-b border-b-Cust-Very-Dark-Grayish-Blue' draggable>
                <div className='flex gap-3 items-center'>
                    <div className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-full overflow-hidden flex justify-center items-center ${props.list.done ? 'bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple' : 'border hover:translate-y-[-5px] cursor-pointer transition ease-in-out duration-100'}`}
                        onClick={() => {
                            props.showDone(props.index)
                        }
                        }
                    >
                        {props.list.done &&
                            <img src={iconCheck} alt="icon check" />
                        }
                    </div>
                    <p className={`draggable cursor-pointer ${props.list.done == true ? 'line-through text-Cust-Dark-Grayish-Blue' : ''}`} >{props.list.work}</p>
                </div>
                <img src={iconX} alt="" className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] cursor-pointer'
                    onClick={() => {
                        props.removeList(props.index)
                    }} />
            </div>
        )
    }

}