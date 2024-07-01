
import {create} from 'zustand';

const ExerciseStore = (set)=>({
    selectedExercise:[],
    addExercise:(exercise)=>set((state)=>({
        selectedExercise:[...state.selectedExercise,exercise],
    }))
})
const useExerciseStore = create(ExerciseStore);

export default useExerciseStore;
