import Profile from "../../models/profile";

module.exports = (data: Profile) => ({
  info: {
    jubility: K.ITEM("s16", data.fulfill?.jubility || 0),
    jubility_yday: K.ITEM("s16", data.fulfill?.jubilityYday || 0),
    tune_cnt: K.ITEM("s32", data.fulfill?.tuneCount || 0),
    save_cnt: K.ITEM("s32", data.fulfill?.saveCount || 0),
    saved_cnt: K.ITEM("s32", data.fulfill?.savedCount || 0),
    fc_cnt: K.ITEM("s32", data.fulfill?.fcCount || 0),
    ex_cnt: K.ITEM("s32", data.fulfill?.exCount || 0),
    clear_cnt: K.ITEM("s32", data.fulfill?.clearCount || 0),
    pf_cnt: K.ITEM("s32", 0),
    match_cnt: K.ITEM("s32", data.fulfill?.matchCount || 0),
    beat_cnt: K.ITEM("s32", 0),
    mynews_cnt: K.ITEM("s32", 0),
    mtg_entry_cnt: K.ITEM("s32", 0),
    mtg_hold_cnt: K.ITEM("s32", 0),
    mtg_result: K.ITEM("u8", 0),
    extra_point: K.ITEM("s32", data.fulfill?.extraPoint || 0),
    is_extra_played: K.ITEM("bool", data.fulfill?.isExtraPlayed || false),
    bonus_tune_points: K.ITEM("s32", data?.bonusPoints || 0), // Migrated from festo
    is_bonus_tune_played: K.ITEM("bool", data?.isBonusPlayed || false), // Migrated from festo
    last_play_time: K.ITEM("s64", data?.lastPlayTime || BigInt(0)), // Adjusted type
  },

  last: {
    play_time: K.ITEM("s64", data.lastPlayTime || BigInt(0)),
    shopname: K.ITEM("str", data.lastShopname),
    areaname: K.ITEM("str", data.lastAreaname),
    title: K.ITEM("s16", data.fulfill?.title || 0),
    parts: K.ITEM("s16", data.fulfill?.parts || 0),
    theme: K.ITEM("s8", data.fulfill?.theme || 0),
    marker: K.ITEM("s8", data.fulfill?.marker || 0),
    rank_sort: K.ITEM("s8", data.rankSort || 1),
    combo_disp: K.ITEM("s8", data.comboDisp || 1),
    music_id: K.ITEM("s32", data.musicId || 0),
    seq_id: K.ITEM("s8", data.seqId || 0),
    sort: K.ITEM("s8", data.fulfill?.sort || 0),
    category: K.ITEM("s8", data.fulfill?.category || 0),
    expert_option: K.ITEM("s8", data.fulfill?.category || 0),
    matching: K.ITEM("s8", data.fulfill?.category || 1),
    hazard: K.ITEM("s8", data.fulfill?.category || 0),
    hard: K.ITEM("s8", data.fulfill?.category || 0),
    seq_edit_id: K.ITEM("str", data?.seqEditId || ""), // Migrated
    dig_select: K.ITEM("s32", 0), // Migrated
    settings: {                             // Migrated and nested
      marker: K.ITEM("s8", data?.marker || 0),
      theme: K.ITEM("s8", data?.theme || 0),
      title: K.ITEM("s16", data?.title || 0),
      parts: K.ITEM("s16", data?.parts || 0),
      rank_sort: K.ITEM("s8", data?.rankSort || 0),
      combo_disp: K.ITEM("s8", data?.comboDisp || 0),
      emblem: K.ARRAY("s16", data?.emblem || [0, 0, 0, 0, 0]),
      matching: K.ITEM("s8", data?.matching || 0),
      hard: K.ITEM("s8", data?.hard || 0),
      hazard: K.ITEM("s8", data?.hazard || 0),
    },
  },

  item: {
    music_list: K.ARRAY("s32", new Array(64).fill(-1)),  // Migrated
    secret_list: K.ARRAY("s32", Array(32).fill(-1)),
    theme_list: K.ITEM("s16", -1),
    marker_list: K.ARRAY("s32", Array(2).fill(-1)),
    title_list: K.ARRAY("s32", Array(96).fill(-1)),
    parts_list: K.ARRAY("s32", Array(96).fill(-1)),
    emblem_list: K.ARRAY("s32", new Array(96).fill(-1)), // Migrated
    commu_list: K.ARRAY("s32", data?.commuList || new Array(16).fill(0)), // Migrated
    new: {
      secret_list: K.ARRAY("s32", Array(32).fill(0)),
      theme_list: K.ITEM("s16", 0),
      marker_list: K.ARRAY("s32", Array(2).fill(0)),
      title_list: K.ARRAY("s32", Array(96).fill(0)),
      music_list: K.ARRAY("s32", new Array(64).fill(0)),    // Migrated
      theme_list_array: K.ARRAY("s32", new Array(16).fill(0)), // Migrated - Renamed to avoid conflict
      marker_list_array: K.ARRAY("s32", new Array(16).fill(0)),// Migrated - Renamed
    },
  },

  history: K.ATTR({ count: "0" }, { tune: [] }), // Migrated - added tune array

  challenge: {
    today: {
      music_id: K.ITEM("s32", 0),
      state: K.ITEM("u8", 0),
    },
    whim: {                                  // Migrated
      music_id: K.ITEM("s32", -1),
      state: K.ITEM("u8", 0),
    },
  },

  news: {
    checked: K.ITEM("s16", 0),
    checked_flag: K.ITEM("u32", 0),          // Migrated
  },

//saucer fulfill macchiato event leftover code
  macchiato: {
    pack_id: K.ITEM("s32", 0),
    bean_num: K.ITEM("u16", 0),
    daily_milk_num: K.ITEM("s32", 1200),
    is_received_daily_milk: K.ITEM("bool", true),
    today_tune_cnt: K.ITEM("s32", 0),
    daily_milk_bonus: K.ARRAY("s32", [100, 100, 1000, 200, 200, 200, 200, 200, 1000]),
    daily_play_burst: K.ITEM("s32", 300),
    sub_menu_is_completed: K.ITEM("bool", true),
    compensation_milk: K.ITEM("s32", 0),
    macchiato_music_list: K.ATTR({
      count: "0"
    }, {
      music: []
    }),
    sub_pack_id: K.ITEM("s32", 0),
    sub_macchiato_music_list: K.ATTR({
      count: "0"
    }, {
      music: []
    }),
    season_music_list: K.ATTR({
      count: "0"
    }),
    match_cnt: K.ITEM("s32", 0),
    achievement_list: K.ATTR({
      count: "0"
    }, {
      achievement: []
    }),
    cow_list: K.ATTR({
      count: "0"
    }),
  },

  rivallist: {
    rival: [].map((rival) => ({      // Migrated and adjusted
      jid: K.ITEM("s32", rival.jubeatId),
      name: K.ITEM("str", rival.name),
      career: {
        level: K.ITEM("s16", 0),
      },
    })),
  },

  only_now_music: K.ATTR({
    count: "0"
  }),
  lab_edit_seq: K.ATTR({
    count: "0"
  }, {
    seq: []
  }), // Migrated - added seq array
  kac_music: K.ATTR({
    count: "0"
  }),

  memorial: {
    latest_event_id: K.ITEM("u8", 1),
    player_event_id: K.ITEM("u8", 1),
    flag: K.ITEM("u32", 0),
    params: K.ARRAY("u32", Array(15).fill(0))
  },
  free_first_play: {
    is_available: K.ITEM("bool", data?.isFirstplay || false), // Migrated
  },
  event_info: {
    event: []
  }, // Migrated
  jbox: {                                          // Migrated
    point: K.ITEM("s32", 0),
    emblem: {
      normal: {
        index: K.ITEM("s16", 2)
      },
      premium: {
        index: K.ITEM("s16", 1)
      },
    },
  },
  new_music: {},                                     // Migrated
  navi: {                                           // Migrated
    flag: K.ITEM("u64", BigInt(data?.navi || 0)),
  },
  gift_list: {},                                      // Migrated
  question_list: {},                                 // Migrated
  team_battle: {},                                   // Migrated
  server: {},                                        // Migrated
  course_list: {                                     // Migrated - but the logic needs adjustment
    course: []
  },
  category_list: {                                   // Migrated - but the logic needs adjustment
    category: []
  },
  fill_in_category: {                                // Migrated
    no_gray_flag_list: K.ARRAY("s32", [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]),
    all_yellow_flag_list: K.ARRAY("s32", [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]),
    full_combo_flag_list: K.ARRAY("s32", [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]),
    excellent_flag_list: K.ARRAY("s32", [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
    ]),
    normal: {
      no_gray_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
      all_yellow_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
      full_combo_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
      excellent_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
    },
    hard: {
      no_gray_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
      all_yellow_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
      full_combo_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
      excellent_flag_list: K.ARRAY("s32", [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
      ]),
    },
  },
  emo_list: {                                       // Migrated - but the logic needs adjustment
    emo: []
  },
  eamuse_gift_list: {
    gift: []
  }, // Migrated
  department: {
    shop_list: {
      shop: []
    },
  }, // Migrated
  clan_course_list: {},                               // Migrated
  team: K.ATTR({                                       // Migrated
    id: "0"
  }, {
    section: K.ITEM("s32", 0),
    street: K.ITEM("s32", 0),
    house_number_1: K.ITEM("s32", 0),
    house_number_2: K.ITEM("s32", 0),
    move: K.ATTR({
      id: "1",
      section: "1",
      street: "1",
      house_number_1: "1",
      house_number_2: "1",
    }),
  }),
  daily_bonus_list: {},                                 // Migrated
  ticket_list: {},                                    // Migrated
  digdig: {                                           // Migrated
    flag: K.ITEM("u64", BigInt(0)),
    main: {
      stage: K.ATTR({
        number: "0"
      }, {
        point: K.ITEM("s32", 0),
        param: K.ITEM("s32", 0),
      }),
    },
    eternal: {
      ratio: K.ITEM("s32", 0),
      used_point: K.ITEM("s64", BigInt(0)),
      point: K.ITEM("s64", BigInt(0)),
      cube: {
        state: K.ITEM("s8", 0),
        item: [],
      },
      norma: {
        till_time: K.ITEM("s64", BigInt(0)),
        kind: K.ITEM("s32", 0),
        value: K.ITEM("s32", 0),
        param: K.ITEM("s32", 0),
      },
      old: {
        need_point: K.ITEM("s32", 0),
        point: K.ITEM("s32", 0),
        excavated_point: K.ITEM
