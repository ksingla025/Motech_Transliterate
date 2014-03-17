/**
 * 
 */
package phoeneticTransliteration;


import phoeneticTransliteration.javascriptInterface.Javascript;

/**
 * @author Karan Singla
 *
 */
public class Transliterate {

	private String sourceLanguage;
	private String destinationLanguage;

	private String sourceSentence;
	private String transliteratedSentence;

	private String[] tokens;


	public Transliterate(){
		//Set default sourceLanguage as English
		setSourceLanguage(Properties.ENGLISH);
		//Set default targetLanguage as Hindi
		setDestinationLanguage(Properties.HINDI);
	}

	//Getter Setter Functions

	public void setSourceSentence(String sentence){
		sourceSentence = sentence;
	}

	public String getSourceSentence(){
		return sourceSentence;
	}

	public void setSourceLanguage(String src){
		sourceLanguage = src;
	}

	public String getSourceLanguage(){
		return sourceLanguage;
	}

	public void setDestinationLanguage(String dst){
		destinationLanguage = dst;
	}

	public String getDestinationLanguage(){
		return destinationLanguage;
	}

	//Getter Setter Functions end

	/**
	 * Tokenizes a given String into individual Tokens
	 * @param sentence
	 * @return Array of individual Tokens
	 */
	private String[] tokenize(){
		// TO DO::
		// Add different tokenization mechanisms for different language schemes
		// For example the regular white-space splitting as a simple way for
		// Tokenization wont work with say Japanese and Chinese


		return getSourceSentence().split("\\s+");
	}

	/*
	 * Add a transliterate(String) interaface to return transliterated sentence directly
	 */
	public String transliterate(String sentence){
		setSourceSentence(sentence);
		tokens = tokenize();

		transliteratedSentence = "";
		for(int i=0;i<tokens.length;i++){
			String query="";
			query += "chngLang("+getDestinationLanguage()+");";
			query += "var myResult = Trans('"+tokens[i]+"');";
			try {
				transliteratedSentence += (String) Javascript.executeJavascript(query, "myResult") +" ";
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

		return transliteratedSentence;

	}

}
