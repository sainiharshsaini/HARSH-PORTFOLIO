import './resume.scss' 

import ResumeImg from './HarshSainiResume.png'

import { RiFileDownloadLine } from "@remixicon/react";

// RiDownloadCloudFill
// RiDownloadLine

export default function Resume() {
    return (
        <div className='resume'>
            <div className="resume-content">
                <h2>Resume</h2>
                <div className="resume-img">
                    <img src={ResumeImg} alt="" />
                </div>
                <button>DOWNLOAD RESUME <RiFileDownloadLine size={25}/></button>
            </div>
        </div>
    )
}
