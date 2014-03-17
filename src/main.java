import java.io.UnsupportedEncodingException;
import java.nio.charset.Charset;

import phoeneticTransliteration.Transliterate;



/**
 * @author Karan Singla
 *
 */
public class main {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Transliterate T = new Transliterate();
		T.setSourceLanguage(phoeneticTransliteration.Properties.ENGLISH);
		T.setDestinationLanguage(phoeneticTransliteration.Properties.HINDI);
		String result = T.transliterate("mujhe khaanaa khanaa hai."); //in UTF-8 so will not print directly

		renderUTF8(result);
	}
	public static void renderUTF8(String sentence){
		//This block makes an effort to render UtF-8 characters properly
		try {
			byte[] theByteArray;
			theByteArray = sentence.getBytes("UTF-8");
			System.out.println(new String(theByteArray, Charset.forName("UTF-8")));
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
