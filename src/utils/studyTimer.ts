
export interface StudySession {
  topicId: string;
  timeInSeconds: number;
  date: string;
}

export function saveStudySession(topicId: string, timeInSeconds: number): void {
  // Obter sessões de estudo existentes
  const existingSessions: StudySession[] = getStudySessions();
  
  // Adicionar nova sessão
  const newSession: StudySession = {
    topicId,
    timeInSeconds,
    date: new Date().toISOString()
  };
  
  // Salvar sessões atualizadas
  localStorage.setItem('studySessions', JSON.stringify([...existingSessions, newSession]));
}

export function getStudySessions(): StudySession[] {
  const sessions = localStorage.getItem('studySessions');
  return sessions ? JSON.parse(sessions) : [];
}

export function getTotalStudyTime(): number {
  const sessions = getStudySessions();
  return sessions.reduce((total, session) => total + session.timeInSeconds, 0);
}

export function formatTime(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  
  return [
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    remainingSeconds.toString().padStart(2, '0')
  ].join(':');
}
