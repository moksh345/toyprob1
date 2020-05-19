import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Note from './Note';
import DatePicker from 'react-native-datepicker';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            noteText: '',
            check: false,
            dueDate: '',

        }

    }
    render() {
        let task = this.state.tasks.map((val, key) => {
            return <Note key={key} keyval={key} val={val}
                deleteMethod={() => this.deleteNote(key)} />
        });

        return (
            <View style={styles.container}>
                <View style={styles.head}>
                    <Text style={styles.headtxt}>To Do List</Text>
                </View>
                <ScrollView style={styles.scroll}>
                    {task}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput style={styles.iptxt}
                        placeholder='Add Task'
                        placeholderTextColor='white'
                        underlineColorAndroid='transparent'
                        onChangeText={(noteText) => this.setState({ noteText })}
                        value={this.state.noteText}>

                    </TextInput>
                    <DatePicker
                        style={{ width: 200 }}
                        duedate={this.state.duedate}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2020-05-18"
                        maxDate="2021-06-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: 36
                            }
                            // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(duedate) => { this.setState({ duedate: duedate }) }}
                    />
                </View>
                <TouchableOpacity style={styles.addButton} onPress={this.addNote.bind(this)}>
                    <Text style={styles.addButtonText}>ADD</Text>
                </TouchableOpacity>

            </View>
        );

    }
    addNote() {
        if (this.state.noteText) {
            var d = new Date();
            this.state.tasks.push({
                'date': "Created on: " + d.getFullYear() +
                    "/" + (d.getMonth() + 1) +
                    "/" + d.getDate(),
                'note': this.state.noteText,
                'duedate': this.state.duedate
            });
            this.setState({ tasks: this.state.tasks })
            this.setState({ noteText: '' });
            this.setState({ duedate: '' });
            // this.setState({ input: '' });
        }
    }
    deleteNote(key) {
        this.state.tasks.splice(key, 1);
        this.setState({ tasks: this.state.tasks })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 10,
        borderBottomColor: "#ddd",
    },
    headtxt: {
        color: 'white',
        fontSize: 18,
        padding: 26,
    },
    scroll: {
        flex: 1,
        marginBottom: 100,
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
    },
    iptxt: {
        alignSelf: 'stretch',
        color: '#fff',
        padding: 20,
        backgroundColor: '#252525',
        borderTopWidth: 2,
        borderTopColor: '#ededed'
    },
    addButton: {
        position: 'absolute',
        zIndex: 11,
        right: 20,
        bottom: 90,
        backgroundColor: 'yellow',
        width: 90,
        height: 90,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    addButtonText: {
        color: 'black',
        fontSize: 24,
    },
});
