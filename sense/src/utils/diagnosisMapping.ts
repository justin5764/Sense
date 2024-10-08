// src/utils/diagnosisMapping.ts

export const diagnosisToFacilityTypes: { [key: string]: string[] } = {
    depression: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    anxiety: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'substance abuse': ['rehab_center', 'psychiatrist', 'therapist', 'addiction_specialist'],
    bipolar: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    schizophrenia: ['psychiatrist', 'psychologist', 'mental_health_clinic'],
    PTSD: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    OCD: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    ADHD: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    eating_disorders: ['psychiatrist', 'nutritionist', 'therapist', 'rehab_center'],
    personality_disorders: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'traumatic_brain_injury': ['neurologist', 'psychiatrist', 'therapist', 'rehab_center'],
    insomnia: ['psychiatrist', 'psychologist', 'therapist', 'sleep_clinic'],
    phobias: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    panic_disorder: ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'dissociative_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'postpartum_depression': ['psychiatrist', 'psychologist', 'therapist', 'maternal_health_clinic'],
    'obsessive_compulsive_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'generalized_anxiety_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'social_anxiety_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'avoidant_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'borderline_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'histrionic_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'narcissistic_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'paranoid_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'schizoid_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    'schizotypal_personality_disorder': ['psychiatrist', 'psychologist', 'therapist', 'mental_health_clinic'],
    // Add more diagnoses and corresponding facility types as needed
    autism_spectrum_disorder: ['psychiatrist', 'psychologist', 'therapist', 'developmental_clinic'],
  };