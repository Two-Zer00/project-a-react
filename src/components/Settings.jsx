import { Link, Navigate, Route, Routes } from "react-router-dom";
import { MenuSettings } from "./navigation/MenuSettings";
import { ProfileSettings } from "./ProfileSettings";

export function Settings(){
    const handleForm = (e) =>{
        e.preventDefault();
        let form = e.target;
        localStorage.setItem('nsfw', form.nsfw.checked);
        localStorage.setItem('theme', form.theme.value);
    }
    return(
        <div className="h-screen w-screen px-2 dark:text-white">
            <div className="w-full h-fit">
                <form className="" onSubmit={handleForm}>
                    <div className="border border-t-0 p-2 flex flex-col divide-y gap-y-2">
                        <div className="flex-1">
                            <div className="flex flex-row">
                                <div className="flex-auto flex flex-col w-1/2">
                                    <div className="flex-1 place-self-center">
                                        <label htmlFor="nsfw" className="text-red-700 font-bold rounded-md">NSFW</label>
                                    </div>
                                    <small className="flex-1 place-self-center">You will not see content marked as NSFW</small>
                                </div>
                                <input type="checkbox" className="flex-auto w-1/2" id="nsfw" defaultChecked={localStorage.getItem('nsfw')} />
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex flex-row">
                                <div className="flex-auto w-1/2 place-self-center text-center">
                                    <label htmlFor="theme" className="block font-bold">Theme</label>
                                    <small>This also change based on the configurations of your device</small>
                                </div>
                                <div className="flex-auto w-1/2 text-center my-2">
                                    <select name="theme" id="theme" defaultValue={localStorage.getItem('theme')} className={"dark:bg-transparent dark:border dark:rounded"}>
                                        <option value="1">Ligth</option>
                                        <option value="2">Dark</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full block text-right">
                    <input type="submit" value={`Update`} className={`bg-purple-700 rounded text-white py-2 font-bold w-full lg:w-1/6 my-3 hover:cursor-pointer hover:bg-purple-600`} />
                    </div>
                </form>
            </div>
        </div>
    );
}