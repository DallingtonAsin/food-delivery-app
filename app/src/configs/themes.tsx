import { Platform } from "react-native"
import * as config from './'

export const themeColor = config.colors.primary
export const lightThemeColor = '#f2f7f7'
const disabledColor = 'grey'

const calenderTheme = {
  arrowColor: config.colors.primary,
  arrowStyle: { padding: 0 },
  monthTextColor: 'black',
  textMonthFontSize: 18,
  textMonthFontFamily: 'HelveticaNeue',
  textMonthFontWeight: 'bold' as 'bold',
  textSectionTitleColor: 'black',
  textDayHeaderFontSize: 14,
  textDayHeaderFontFamily: 'HelveticaNeue',
  textDayHeaderFontWeight: 'normal' as 'normal',
  textDayFontSize: 18,
  textDayFontFamily: 'HelveticaNeue',
  textDayFontWeight: '500' as '500',
  textDayStyle: { marginTop: Platform.OS === 'android' ? 2 : 4 },
  selectedDayBackgroundColor: config.colors.gray,
  selectedDayTextColor: config.colors.white,
  textDisabledColor: disabledColor,
  dotColor: themeColor,
  selectedDotColor: 'white',
  disabledDotColor: disabledColor,
  dotStyle: { marginTop: -2 },
  textSectionTitleDisabledColor: '#d9e1e8'
}

const streamChatThemes = {
  chat: {
    channelPreview: {
      container: {
        backgroundColor: 'red',
      },
    }
  },

  message: {
    messageSimple: {
      content: {
        markdown: {
          text: {
            fontSize: 16,
          },
          inlineCode: {
            fontSize: 10,
          },
        },
      },
    },
  }
}

export { calenderTheme, streamChatThemes }