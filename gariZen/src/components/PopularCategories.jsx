import React from 'react'
import steer from '../images/steer.png'
import turbo from '../images/turbo.png'
import lighting from '../images/lighting.png'
import intercooler from '../images/intercooler.png'
import brake from '../images/brakes.png'
import EngineOil from '../images/EngineOil.png'
import door from '../images/door.png'
import grill from '../images/grill.png'
import timing from '../images/timing.png'
import accelerator from '../images/accelerator.png'
import airfilter from '../images/airfilter.png'
import gauges from '../images/gauges.png'
import { CiCircleChevRight, CiCircleChevLeft } from "react-icons/ci";

const PopularCategories = () => {
    const scrollLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const scrollRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }
  return (
    <div className='relative py-2 px-5 space-y-2'>
        <h2 className=" text-primary font-semibold text-lg relative">Categories</h2>
        <hr className='relative' />
        <CiCircleChevLeft onClick={scrollLeft} size={28} className='absolute left-1 xl:hidden ' />
        <CiCircleChevRight onClick={scrollRight} size={28} className='absolute right-1 xl:hidden' />
        <div id='slider' className='overflow-x-scroll scrollbar-hide scroll-smooth  whitespace-nowrap flex space-y-2 space-x-5 min-w-screen'>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={steer} alt='1' />
                <p className='text-base mt-2 '>Interior</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={turbo} alt='1' />
                <p className='text-base mt-2 '>Turbos</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={lighting} alt='1' />
                <p className='text-base mt-2 '>Lighting</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={intercooler} alt='1' />
                <p className='text-base mt-2'>Intercoolers</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={brake} alt='1' />
                <p className='text-base mt-2 '>Brakes</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={EngineOil} alt='1' />
                <p className='text-base mt-2 '>Engine Oils</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={door} alt='1' />
                <p className='text-base mt-2'>Exterior</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={grill} alt='1' />
                <p className='text-base mt-2'>Grills</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={timing} alt='1' />
                <p className='text-base mt-2 '>Timings</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={accelerator} alt='1' />
                <p className='text-base mt-2'>Perfomance</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={airfilter} alt='1' />
                <p className='text-base mt-2'>Air Filters</p>
            </section>
            <section className='w-32 h-auto grid place-items-center p-3 hover:text-primary cursor-pointer'>
                <img src={gauges} alt='1' />
                <p className='text-base mt-2'>Gauges</p>
            </section>
        </div>
    </div>
  )
}

export default PopularCategories