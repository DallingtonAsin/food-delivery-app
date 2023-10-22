import { useContext, useEffect, useState } from 'react'
import { Context as AppContext } from '../../context/AppContext'
import { Context as PatientContext } from '../../context/patientContext'
import { displayMessage } from '../common/SharedHelper'
import { requestAudioPermission } from '../common/Permissions'
import { Platform } from 'react-native'

const useMeetingClient = (appointmentId: any) => {

    const [clientIsReady, setClientIsReady] = useState(false)
    const [connectionData, setConnectionData] = useState<any>()
    const [patient, setPatient] = useState<any>()
    const [doctor, setDoctor] = useState<any>()
    const { getMeetingDetails, postCallDetails } = useContext(AppContext)
    const { postRating } = useContext(PatientContext)

    useEffect(() => {
        const requestPermissions = async () => {
            if (Platform.OS === 'android') { await requestAudioPermission() }
        }
        requestPermissions()
        getMeetingDetails({ appointmentId: appointmentId, onSuccess: setMeetingDetails, onFailure: displayMessage, onCompletion: () => { setClientIsReady(true) } })
    }, [])

    const setMeetingDetails = (data: any) => {
        if (data && data.meeting_access) {
            setConnectionData(data.meeting_access)
        }

        if (data && data.patient) {
            setPatient(data.patient)
        }

        if (data && data.doctor) {
            setDoctor(data.doctor)
        }
    }

    const submitCallDetails = (is_patient: boolean, payload: any, onCompletion: any) => {
        setClientIsReady(false)
        postCallDetails({
            is_patient: is_patient, payload: payload, onSuccess: onCompletion, onFailure: displayMessage, onCompletion: () => {
                setClientIsReady(true)
            }
        })
    }

    const submitRating = (doctorId: number, rating: number, comment: string, onCompletion: () => void) => {
        try {
            const payload = {
                doctor_id: doctorId,
                rating: rating,
                comment: comment
            }
            postRating({ payload: payload, onSuccess: displayMessage, onFailure: displayMessage, onCompletion: onCompletion })
        } catch (err) {
            console.log(`err`, err)
        }
    }

    const onHangUp = (callback: () => void) => {
        callback()
    }

    return {
        clientIsReady, connectionData, patient, doctor, submitCallDetails, submitRating, onHangUp
    }
}

export { useMeetingClient }
