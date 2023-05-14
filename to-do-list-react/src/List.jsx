import iconX from './assets/img/icon-cross.svg'
import iconCheck from './assets/img/icon-check.svg'

export function List(props) {
    
    if (props.category === 'all') {
        return (
            <div className='px-3 py-3 lg:px-5 lg:py-4 flex justify-between items-center text-xs md:text-base text-Cust-Bg-Color dark:text-white border-b dark:border-b-Cust-Very-Dark-Grayish-Blue border-b-Cust-Light-Grayish-Blue group' draggable onDrag={props.onDragReorder} onDragOver={props.onHandleDragOver} onDrop={props.onDropReorder}>
                <div className='flex gap-3 items-center '>
                    <div
                        className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-full overflow-hidden p-[0.5px] ${props.list.done ? 'bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple' : 'border border-Cust-Dark-Grayish-Blue hover:translate-y-[-4px] cursor-pointer hover:border-Cust-Bg-Color hover:bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple group:'}`}
                        onClick={() => {
                            props.setDone(props.index)
                        }}
                    >
                        <div className={`w-full h-full rounded-full flex justify-center items-center ${props.list.done !== true && 'group-hover:bg-Cust-Bg-Color'}`}>
                            {props.list.done &&
                                <img src={iconCheck} alt="icon check" />
                            }
                        </div>
                    </div>
                    <p className={`draggable cursor-pointer ${props.list.done === true ? 'line-through text-Cust-Light-Grayish-Blue dark:text-Cust-Dark-Grayish-Blue' : ''}`}>{props.list.work}</p>
                </div>
                <img src={iconX} alt="" className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] cursor-pointer lg:opacity-0 group-hover:opacity-100'
                    onClick={() => {
                        props.removeList(props.index)
                    }} />
            </div>
        )
    }
    else if (props.category === 'active' && props.list.done === false) {
        return (
            <div className='px-3 py-3 lg:px-5 lg:py-4 flex justify-between items-center text-xs md:text-base text-Cust-Bg-Color dark:text-white border-b dark:border-b-Cust-Very-Dark-Grayish-Blue border-b-Cust-Light-Grayish-Blue group' draggable onDrag={props.onDragReorder} onDragOver={props.onHandleDragOver} onDrop={props.onDropReorder}>
                <div className='flex gap-3 items-center '>
                    <div
                        className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-full overflow-hidden p-[0.5px] ${props.list.done ? 'bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple' : 'border border-Cust-Dark-Grayish-Blue hover:translate-y-[-4px] cursor-pointer hover:border-Cust-Bg-Color hover:bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple group:'}`}
                        onClick={() => {
                            props.setDone(props.index)
                        }}
                    >
                        <div className={`w-full h-full rounded-full flex justify-center items-center ${props.list.done !== true && 'group-hover:bg-Cust-Bg-Color'}`}>
                            {props.list.done &&
                                <img src={iconCheck} alt="icon check" />
                            }
                        </div>
                    </div>
                    <p className={`draggable cursor-pointer ${props.list.done === true ? 'line-through text-Cust-Light-Grayish-Blue dark:text-Cust-Dark-Grayish-Blue' : ''}`}>{props.list.work}</p>
                </div>
                <img src={iconX} alt="" className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] cursor-pointer lg:opacity-0 group-hover:opacity-100'
                    onClick={() => {
                        props.removeList(props.index)
                    }} />
            </div>
        )
    }

    else if (props.category === 'complete' && props.list.done === true) {
        return (
            <div className='px-3 py-3 lg:px-5 lg:py-4 flex justify-between items-center text-xs md:text-base text-Cust-Bg-Color dark:text-white border-b dark:border-b-Cust-Very-Dark-Grayish-Blue border-b-Cust-Light-Grayish-Blue group' draggable onDrag={props.onDragReorder} onDragOver={props.onHandleDragOver} onDrop={props.onDropReorder}>
                <div className='flex gap-3 items-center '>
                    <div
                        className={`w-[16px] h-[16px] lg:w-[24px] lg:h-[24px] rounded-full overflow-hidden p-[0.5px] ${props.list.done ? 'bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple' : 'border border-Cust-Dark-Grayish-Blue hover:translate-y-[-4px] cursor-pointer hover:border-Cust-Bg-Color hover:bg-gradient-to-r from-Cust-Sky-Blue to-Cust-Purple group:'}`}
                        onClick={() => {
                            props.setDone(props.index)
                        }}
                    >
                        <div className={`w-full h-full rounded-full flex justify-center items-center ${props.list.done !== true && 'group-hover:bg-Cust-Bg-Color'}`}>
                            {props.list.done &&
                                <img src={iconCheck} alt="icon check" />
                            }
                        </div>
                    </div>
                    <p className={`draggable cursor-pointer ${props.list.done === true ? 'line-through text-Cust-Light-Grayish-Blue dark:text-Cust-Dark-Grayish-Blue' : ''}`}>{props.list.work}</p>
                </div>
                <img src={iconX} alt="" className='w-[12px] h-[12px] lg:w-[16px] lg:h-[16px] cursor-pointer lg:opacity-0 group-hover:opacity-100'
                    onClick={() => {
                        props.removeList(props.index)
                    }} />
            </div>
        )
    }

}