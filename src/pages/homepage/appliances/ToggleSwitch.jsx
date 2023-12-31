import { useState } from "react";
import { Box , Text } from "../../../components/root";

export default function Toggle() {
    const [enabled, setEnabled] = useState(false);
    //Manage Function for Power Switch
    function setPower(enabled){

    }
    return (
        <Box>
            <Box horizontal>
                <label class="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            setEnabled(!enabled);
                            setPower()
                        }}
                        className="w-11 h-6 
                        bg-gray-200 rounded-full peer  
                        peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                        after:absolute after:top-0.5 after:left-[2px] 
                        after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                        peer-checked:bg-green-600"
                    ></div>
                    <Text className="ml-2 text-sm font-semibold">
                        {enabled ? 'ON' : 'OFF'}
                    </Text>
                </label>
            </Box>
        </Box>
    );
}