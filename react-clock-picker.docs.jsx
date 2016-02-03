import React from 'react'
import TimePicker from './react-clock-picker.jsx';

export default class extends React.Component {
    static styleguide = {
        category: 'Inputs',
        title: 'Clock TimePicker',
        description: 'Hour and minutes picker based on Android interface',
        code: `<TimePicker
                size={300}
                radius={125}
                hours={now.getHours()}
                minutes={now.getMinutes()}
                onChange={({ hours, minutes }) => console.log(hours, minutes)}
                militaryTime={true}
            />`
    };

    render() {
        const now = new Date();
        return (
            <div style={{position: 'relative', height: 400}}>
                <TimePicker
                    size={300}
                    radius={125}
                    hours={now.getHours()}
                    minutes={now.getMinutes()}
                    onChange={({ hours, minutes }) => console.log(hours, minutes)}
                    militaryTime={true}
                />
            </div>
        )
    }
}