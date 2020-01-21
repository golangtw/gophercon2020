const { extractSheets } = require("spreadsheet-to-json");
const config = require("./config");

function nullCoalesce(value) {
  return value == null ? '' : value;
}

extractSheets(
  {
    spreadsheetKey: config.spreadsheetKey
  },
  function(err, data) {
    if (err) { console.log(err); }
    data.Session.shift();
    data.Speaker.shift();

    data.Session.forEach((session) => {
      // title & description
      session.zh = {}
      session.zh.title = nullCoalesce(session.title_zh)
      session.zh.description = nullCoalesce(session.description_zh)

      session.en = {}
      session.en.title = nullCoalesce(session.title_en)
      session.en.description = nullCoalesce(session.description_en)

      delete session.title_zh
      delete session.description_zh
      delete session.title_en
      delete session.description_en

      // speaker
      session.speakers = []

      for (i = 1; i <= 5; i++) {
        if (session['speaker' + i + 'id'] != null) {
          session.speakers.push(session['speaker' + i + 'id'])
        }

        delete session['speaker' + i]
        delete session['speaker' + i + 'id']
      }

      // broadcast
      if (session.broadcast != null) {
        session.broadcast = session.broadcast.split(',')
      }

      // tag
      session.tags = []

      for (i = 1; i <= 3; i++) {
        if (session['tag' + i] != null) {
          session.tags.push(session['tag' + i])
        }

        delete session['tag' + i]
      }
    });

    data.Speaker.forEach((speaker) => {
      speaker.avatar = speaker.avatar == undefined ? config.default_avatar : config.avatar_base_url + speaker.avatar

      speaker.zh = {}
      speaker.zh.name = nullCoalesce(speaker.name_zh)
      speaker.zh.bio = nullCoalesce(speaker.bio_zh)

      speaker.en = {}
      speaker.en.name = nullCoalesce(speaker.name_en)
      speaker.en.bio = nullCoalesce(speaker.bio_en)

      delete speaker.name_zh
      delete speaker.bio_zh
      delete speaker.name_en
      delete speaker.bio_en
    });

    data.SessionType.forEach((type) => {
      type.zh = {}
      type.zh.name = nullCoalesce(type.name_zh)
      type.zh.description = nullCoalesce(type.description_zh)

      type.en = {}
      type.en.name = nullCoalesce(type.name_en)
      type.en.description = nullCoalesce(type.description_en)

      delete type.name_zh
      delete type.name_en
      delete type.description_zh
      delete type.description_en
    });

    data.Room.forEach((room) => {
      room.zh = {}
      room.zh.name = nullCoalesce(room.name_zh)
      room.zh.description = nullCoalesce(room.description_zh)

      room.en = {}
      room.en.name = nullCoalesce(room.name_en)
      room.en.description = nullCoalesce(room.description_en)

      delete room.name_zh
      delete room.name_en
      delete room.description_zh
      delete room.description_en
    });

    data.Tag.forEach((tag) => {
      tag.zh = {}
      tag.zh.name = nullCoalesce(tag.name_zh)
      tag.zh.description = nullCoalesce(tag.description_zh)

      tag.en = {}
      tag.en.name = nullCoalesce(tag.name_en)
      tag.en.description = nullCoalesce(tag.description_en)

      delete tag.name_zh
      delete tag.name_en
      delete tag.description_zh
      delete tag.description_en
    });

    console.log(JSON.stringify({
      sessions: data.Session,
      speakers: data.Speaker,
      session_types: data.SessionType,
      rooms: data.Room,
      tags: data.Tag,
    }));
  }
);
