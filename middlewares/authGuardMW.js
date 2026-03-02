exports.protectorMW = async (req, res, next) => {
  try {
    // 1) bech t'thabat si el user 3andou token or not !
    // 2) nech nthabat ken el token valid or not !
    // 3) bech nthabat si el user still exists !
    // 4) bech nthabat ken el token tsan3et 9bal e5er pass update !
  } catch (error) {
    res.status(400).json({
      message: "Failed !!!",
      error: error,
    });
  }
};
