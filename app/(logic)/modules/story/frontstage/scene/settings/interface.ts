export interface TransitionInField {
    name: string;
    duration: number;
}

export interface TransitionOutField {
    name: string;
    duration: number;
}

export interface TransitionSettingsField {
    transitionIn: TransitionInField;
    transitionOut: TransitionOutField;
}

export interface FilterSettingsField {
    name: string;
    opacity: number;
}

export interface AnimationField {
    name: string;
    timing: TimeVectorField;
    valueBounds: ValueVectorField;
}

export interface AnimationSettingsField {
    animations: AnimationField[];
}

export interface SceneSettingsField {
    transitionSettings: TransitionSettingsField;
    filterSettings: FilterSettingsField;
    animationSettings: AnimationSettingsField;
}